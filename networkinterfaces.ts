import os from 'os';

var interfaces = os.networkInterfaces();
for (const item of Object.keys(interfaces)) {
    console.log('Network interface name: ' + item);
    const intf = interfaces[item];
    for (let networkAddressIndex  = 0;
             networkAddressIndex < (intf?.length ?? 0);
             networkAddressIndex++) {
        const address = intf?.[networkAddressIndex] as os.NetworkInterfaceInfo;
        console.log(`Family: ${address.family}`);
        console.log(`IP Address: ${address.address}`);
        console.log(`Is Internal: ${address.internal} \n\n`);
    }
}