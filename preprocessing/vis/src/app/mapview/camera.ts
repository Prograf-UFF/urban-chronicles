import { GeoUtils } from './geoutils';
import { vec3, mat4, vec2 } from 'gl-matrix';
import { CameraStatus } from './constants';

/**
 * 3D Camera representation
 */
export class Camera {
  // View parameters
  protected wOrigin: vec2 = vec2.create();
  protected wEye: vec3 = vec3.create();
  protected wEyeDir: vec3 = vec3.create();
  protected wEyeLength: number;
  protected wLookAt: vec3 = vec3.create();
  protected wUp: vec3 = vec3.create();
  protected wNear: number;
  protected wFar: number;

  protected groundRes: number; // 1 unit in worldspace equals to {groundRes} meters in the z-axis

  protected fovy = 45 * Math.PI / 180.0;

  protected mProjectionMatrix: mat4 = mat4.create();
  protected mViewMatrix: mat4 = mat4.create();
  protected mModelMatrix: mat4 = mat4.create();

  // camera status
  private status: CameraStatus;

  // view resolution
  private viewportWidth: number;
  private viewportHeight: number;

  /**
   * The Camera constructor
   */
  constructor(wx: number, wy: number, wz: number) {
    this.groundRes = GeoUtils.groundResolution(wx, wy, 0);
    // z-values start from here are in meters
    this.wNear = 10 / this.groundRes;
    this.wFar = 1e9 / this.groundRes;

    // const projectedCenter = GeoUtils.latLng2Coord(wx, wy);
    this.wOrigin = vec2.fromValues(wx, wy);
    const projectedCenter = [0, 0];
    this.wLookAt = vec3.fromValues(projectedCenter[0], projectedCenter[1], 0);
    this.wEye = vec3.fromValues(projectedCenter[0], projectedCenter[1], 10000); // TODO: calculate the camera height instead of hardcoding
    this.zScaling(1 / this.groundRes);
    // meter is not longer used in the remaining code
    this.wUp = vec3.fromValues(0, 1, 0);
    //
    this.status = CameraStatus.Camera3D;
  }

  getCameraStatus(): CameraStatus {
    return this.status;
  }

  setCameraStatus(status: CameraStatus) {
    this.status = status;
    if (this.status === CameraStatus.Camera2D) {
      // set parameters
      this.wLookAt = vec3.fromValues(this.wEye[0], this.wEye[1], 0);
      // meter is not longer used in the remaining code
      this.wUp = vec3.fromValues(0, 1, 0);
      this.wEyeDir = vec3.fromValues(0, 0, -1);
      this.wEyeLength = vec3.length(this.wEyeDir);
    }
  }

  getProjectionMatrix(): Float32Array | number[] {
    return this.mProjectionMatrix;
  }

  getViewMatrix(): Float32Array | number[] {
    return this.mViewMatrix;
  }

  getModelViewMatrix(): Float32Array | number[] {
    const modelViewMatrix = mat4.mul(mat4.create(), this.mViewMatrix, this.mModelMatrix); // modelView matrix
    return modelViewMatrix;
  }

  getWorldOrigin(): Float32Array | number[] {
    return this.wOrigin;
  }

  getEye(): Float32Array | number[] {
    return this.wEye;
  }

  getGroundResolution(): number {
    return this.groundRes;
  }

  setViewportResolution(x: number, y: number) {
    this.viewportWidth = x;
    this.viewportHeight = y;
  }

  getViewportResolution(): number[] {
    return [
      this.viewportWidth,
      this.viewportHeight
    ];
  }

  updateEyeDirAndLen() {
    vec3.sub(this.wEyeDir, this.wLookAt, this.wEye);
    this.wEyeLength = vec3.length(this.wEyeDir);
    vec3.normalize(this.wEyeDir, this.wEyeDir);
  }

  zScaling(scale: number) {
    this.wEye[2] = this.wEye[2] * scale;
    this.wLookAt[2] = this.wLookAt[2] * scale;

    this.updateEyeDirAndLen();
  }

  zoom(delta: number, x: number, y: number) {
    delta = delta < 0 ? 0.003 : -0.003;

    const dir = this.screenCoordToWorldDir(x, y);
    vec3.scaleAndAdd(this.wEye, this.wEye, dir, delta); // this.wEye += dir * delta;
    vec3.scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;
  }

  translate(dx: number, dy: number) {
    const scale = this.wEye[2];
    const X = vec3.create();
    vec3.normalize(X, vec3.cross(X, this.wEyeDir, this.wUp));

    // D = X * dx * scale + this.wUp * dy * scale;
    const D = vec3.add(vec3.create(), vec3.scale(vec3.create(), X, dx * scale), vec3.scale(vec3.create(), this.wUp, dy * scale));
    vec3.add(this.wEye, this.wEye, D);

    vec3.scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;
  }

  yaw(delta: number) {
    vec3.rotateZ(this.wEyeDir, this.wEyeDir, vec3.fromValues(0, 0, 0), delta);
    vec3.rotateZ(this.wUp, this.wUp, vec3.fromValues(0, 0, 0), delta);

    vec3.scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;
  }

  pitch(delta: number) {
    delta = -delta;
    // this.wEyeDir = this.wUp * sin(delta) + this.wEyeDir * cos(delta);
    vec3.add(this.wEyeDir, vec3.scale(vec3.create(), this.wUp, Math.sin(delta)), vec3.scale(vec3.create(), this.wEyeDir, Math.cos(delta)));
    vec3.normalize(this.wEyeDir, this.wEyeDir);

    vec3.scaleAndAdd(this.wLookAt, this.wEye, this.wEyeDir, this.wEyeLength); // this.wLookAt = this.wEye + this.wEyeDir * this.wEyeLength;

    vec3.cross(this.wUp, vec3.cross(vec3.create(), this.wEyeDir, this.wUp), this.wEyeDir);
    vec3.normalize(this.wUp, this.wUp);
  }

  update() {
    this.mModelMatrix = mat4.fromScaling(mat4.create(), vec3.fromValues(1, 1, 1 / this.groundRes)); // model matrix
    mat4.lookAt(this.mViewMatrix, this.wEye, this.wLookAt, this.wUp); // view matrix
    mat4.perspective(this.mProjectionMatrix, this.fovy, 1, this.wNear, this.wFar); // TODO: get the aspect ratio from canvas
  }

  screenCoordToWorldDir(x: number, y: number) {
    const wRight = vec3.create();
    vec3.normalize(wRight, vec3.cross(wRight, this.wEyeDir, this.wUp));

    const upOffset = vec3.scale(vec3.create(), this.wUp, Math.tan(this.fovy / 2) * (y - 0.5) * 2);
    const rightOffset = vec3.scale(vec3.create(), wRight, Math.tan(this.fovy / 2) * (x - 0.5) * 2);
    const offset = vec3.add(vec3.create(), upOffset, rightOffset);
    const dir = vec3.add(vec3.create(), this.wEyeDir, offset);
    vec3.normalize(dir, dir);

    return dir;
  }

  screenCoordToLatLng(x: number, y: number) {
    const dir = this.screenCoordToWorldDir(x, y);

    const t = -this.wEye[2] / dir[2];
    if (t > 0) {
      const intersectPoint = vec3.scaleAndAdd(vec3.create(), this.wEye, dir, t);
      const originCoord = GeoUtils.latLng2Coord(this.wOrigin[0], this.wOrigin[1]);
      const latLng = GeoUtils.coord2LatLng(intersectPoint[0] + originCoord[0], intersectPoint[1] + originCoord[1]);
      console.log(latLng);
      return latLng;
    }
    return null;
  }
}
