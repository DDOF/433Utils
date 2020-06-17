
# Defines the RPI variable which is needed by rc-switch/RCSwitch.h
CXXFLAGS=-DRPI

all: customRFSniffer customCodeSend customSend

customRFSniffer: ./../rc-switch/RCSwitch.o customRFSniffer.o
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o $@ -lwiringPi -lwiringPiDev -lcrypt

customCodeSend: ./../rc-switch/RCSwitch.o customCodeSend.o
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o $@ -lwiringPi -lwiringPiDev -lcrypt

customSend: ./../rc-switch/RCSwitch.o customSend.o
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $+ -o $@ -lwiringPi -lwiringPiDev -lcrypt


clean:
	$(RM) ./../rc-switch/*.o *.o send codesend servo RFSniffer

