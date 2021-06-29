TEMPLATE = app
TARGET = PlutoBackend
CONFIG += console

LIBS += -L"."
DEPENDPATH += .
MOC_DIR += ./GeneratedFiles/$(ConfigurationName)
UI_DIR += ./GeneratedFiles
RCC_DIR += ./GeneratedFiles

OBJECTS_DIR = GeneratedFiles/objs

include(PlutoBackend.pri)

win32: LIBS += -L"C:\Program Files (x86)\Windows Kits\10\Lib\10.0.18362.0\um\x64" -lAdvAPI32
