#
#  Makefile for fltk applications
#

LIBS = -L/usr/local/lib/fltk1.3 -lfltk -lfltk_gl -lfltk_images -lfltk_forms -lXext -lX11 -lGL -lGLU -lpng -lz -lm

CFLAGS = -O1 -std=c++11

CC = g++

.SUFFIXES: .o .cpp .cxx

.cpp.o: 
	$(CC) $(CFLAGS) $(LIBS) -c -o $*.o $<

.cxx.o: 
	$(CC) $(CFLAGS) $(LIBS) -c -o $*.o $<


ALL.O = bitmap.o camera.o color.o curve.o curveevaluator.o \
        graphwidget.o indicatorwindow.o linearcurveevaluator.o \
	beziercurveevaluator.o bsplinecurveevaluator.o \
        modelerapp.o modelerdraw.o modelerui.o animatoruiwindows.o \
        modelerview.o particleSystem.o point.o \
        rect.o tank.o rulerwindow.o particle.o
 
animator: $(ALL.O)
	$(CC) $(CFLAGS) -o $@ $(ALL.O) $(INCLUDE) $(LIBDIR) $(LIBS)

clean:  
	rm -f $(ALL.O)

clean_all:
	rm -f $(ALL.O) animator
