from multiprocessing import Process

from datacleaning import run_process as DTRun_process
from popsshpExtract import run_process as POPSRun_process
from neighborhoodshpExtract import run_process as NSPRUun_process
from communityDistrictshpExtract import run_process as CDSPRun_process

from addpopsattribute import run_process as ADDPOPRun_process

from splitAttributes import run_process as SATTRRun_process

from finalStructuredData import run_process as FSDRun_process

from mergecdtoneigh import run_process as MCDNRun_process

from preprocessingStructure import run_process as PSRun_process

from customAttributePrecessing import run_process as CAPRun_process

import os
import shutil

from Model.util import boroughs
from Model.util import categs

def create_folder(path):
  if not os.path.exists(path):
    os.makedirs(path)

def move_data_file(source, target):
  shutil.move(source, target)

def create_folders(mainFolderPath):
  create_folder(mainFolderPath)
  
  #./dist/data/Attributes
  attributes_folder = os.path.join(mainFolderPath, 'Attributes')
  create_folder(attributes_folder)
  
  #./dist/data/Dataset
  dataset_folder = os.path.join(mainFolderPath, 'Dataset')
  create_folder(dataset_folder)
  
  #./dist/data/Geometries
  geometries_folder = os.path.join(mainFolderPath, 'Geometries')
  create_folder(geometries_folder)
  
  #boroughsFolders
  for borough in boroughs:
    attr_borough_folder = os.path.join(attributes_folder, borough)
    create_folder(attr_borough_folder)
    dataset_borough_folder = os.path.join(dataset_folder, borough)
    create_folder(dataset_borough_folder)
    geometries_borough_folder = os.path.join(geometries_folder, borough)
    create_folder(geometries_borough_folder)
  
  #./dist/data/Metas
  metas_folder = os.path.join(mainFolderPath, 'Metas')
  create_folder(metas_folder)
  
  #./dist/data/nycpops
  nycpops = os.path.join(mainFolderPath, 'nycpops')
  create_folder(nycpops)

def move_Attributes(sourceFolderPath, mainFolderPath):
  sourceFilePathTemplate = os.path.join(sourceFolderPath, '{borough}', 'neigh_{borough}_fullFinalData_withNeighCode_attributes_{categ}_list.out')
  targetFilePathTemplate = os.path.join(mainFolderPath, 'Attributes', '{borough}', '{borough}_fullFinalData_withNeighCode_attributes_{categ}.out')
  for borough in boroughs:
    for categ in categs:
      sourceFilePath = sourceFilePathTemplate.format(borough=borough, categ=categ)
      targetFielPath = targetFilePathTemplate.format(borough=borough, categ=categ)
      shutil.copy(sourceFilePath, targetFielPath)

def move_Dataset(sourceFolderPath, mainFolderPath):
  sourceFilePathTemplate = os.path.join(sourceFolderPath, '{borough}', '{borough}_fullFinalData_withNeighCode.out')
  targetFilePathTemplate = os.path.join(mainFolderPath, 'Dataset', '{borough}', '{borough}_fullFinalData_withNeighCode.out')
  for borough in boroughs:
    sourceFilePath = sourceFilePathTemplate.format(borough=borough)
    targetFielPath = targetFilePathTemplate.format(borough=borough)
    shutil.copy(sourceFilePath, targetFielPath)

def move_Geometries(sourceFolderPath, mainFolderPath):
  sourceFilePathTemplate = os.path.join(sourceFolderPath, '{borough}', 'neigh_{borough}_fullFinalData_withNeighCode_geometries_nycoord_urbane.out')
  targetFilePathTemplate = os.path.join(mainFolderPath, 'Geometries', '{borough}', '{borough}_fullFinalData_withNeighCode_geometries.out')
  for borough in boroughs:
    sourceFilePath = sourceFilePathTemplate.format(borough=borough)
    targetFielPath = targetFilePathTemplate.format(borough=borough)
    shutil.copy(sourceFilePath, targetFielPath)

def move_Metas(sourceFolderPath, mainFolderPath):
  sourceFolderPathTemplate = os.path.join(sourceFolderPath, 'Metas')
  targetFolderPathTemplate = os.path.join(mainFolderPath, 'Metas')
  for file in os.listdir(sourceFolderPathTemplate):
    sourceFilePath = os.path.join(sourceFolderPathTemplate, file)
    targetFilePath = os.path.join(targetFolderPathTemplate, file)
    shutil.copy(sourceFilePath, targetFilePath)

def move_others(mainFolderPath, targetFolderPath):
  nycpopsFileName = os.path.join('.','nycpops', 'nycpops.csv')
  shutil.copy(nycpopsFileName, os.path.join(targetFolderPath, nycpopsFileName))
  
  neighFileName = os.path.join(mainFolderPath, 'neigh_fromboroughs_nycoords_urbane.out')
  shutil.copy(neighFileName, os.path.join(targetFolderPath, 'neigh_fromboroughs.out'))
  
  cdFileName = os.path.join(mainFolderPath, 'cd_fromboroughs_nycoords_urbane.out')
  shutil.copy(cdFileName, os.path.join(targetFolderPath, 'cd_fromboroughs.out'))

  popsFileName = os.path.join(mainFolderPath, 'pops_fromboroughs.out')
  shutil.copy(popsFileName, os.path.join(targetFolderPath, 'pops_fromboroughs.out'))

def generate_dir_folder():
  sourceFilderPath = './Data'
  targetFolderPath = './dist/data'
  create_folders(targetFolderPath)
  move_Attributes(sourceFilderPath, targetFolderPath)
  move_Dataset(sourceFilderPath, targetFolderPath)
  move_Geometries(sourceFilderPath, targetFolderPath)
  move_Metas(sourceFilderPath, targetFolderPath)
  move_others(sourceFilderPath, targetFolderPath)


if __name__ == '__main__':
  outputFilePath = "./Data/"
  if not os.path.exists(outputFilePath):
      os.makedirs(outputFilePath)
  pts = []
  pts.append(Process(target=DTRun_process))
  pts.append(Process(target=POPSRun_process))
  pts.append(Process(target=NSPRUun_process))
  pts.append(Process(target=CDSPRun_process))
  for p in pts:
    p.start()
  for p in pts:
    p.join()
  pts = None
  ADDPOPRun_process()
  SATTRRun_process()
  FSDRun_process()
  MCDNRun_process()
  PSRun_process()
  CAPRun_process()
  generate_dir_folder()
