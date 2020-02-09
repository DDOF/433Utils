
# Defines the RPI variable which is needed by rc-switch/RCSwitch.h
CXXFLAGS=-DRPI

all: customRFSniffer customCodeSend customSend

customRFSniffer: ./../433Utils/rc-switch/RCSwitch.o customRFSniffer.o
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o $@ -lwiringPi -lwiringPiDev -lcrypt

customCodeSend: ./../433Utils/rc-switch/RCSwitch.o customCodeSend.o
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o $@ -lwiringPi -lwiringPiDev -lcrypt

customSend: ./../433Utils/rc-switch/RCSwitch.o customSend.o
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o $@ -lwiringPi -lwiringPiDev -lcrypt


clean:
	$(RM) ./../433Utils/rc-switch/*.o *.o send codesend servo RFSniffer

