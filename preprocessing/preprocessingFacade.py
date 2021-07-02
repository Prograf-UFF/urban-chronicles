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
