/*
* OS Module in NodeJS ->>>
    - OS module(Operating System module) which is used where we want to get the information of the operating system
    - OS module is used to check the systems RAM, Architecture, hostname, platform, etc
    - OS module is used when we want to check the projects behavior on different operating systems
    - To use the os module we first need to import it like done below
        const os = require('os');
    - To see the type of the operating system bit we do like this below
        console.log(os.arch());      // output: x64
    - To see the total RAM in GB we do like this below
        console.log(os.totalmem()/(1024*1024*1024));    // output: 15.692127227783203
    - To see the total free RAM in GB of the system we do like this below
        console.log(os.freemem()/(1024*1024*1024));    // output: 6.863986968994141
    - To see the hostname of the system we do like this below
        console.log(os.hostname());    // output: Sagar
    - To see the platform of the system we do like this below
        console.log(os.platform());    // output: win32
    - To see the userInfo of the system we do like this below
        console.log(os.userInfo());
        // output: {
                        uid: -1,
                        gid: -1,
                        username: 'sagar',
                        homedir: 'C:\\Users\\sagar',
                        shell: null
                    }
    
*/

const os = require('os');
console.log(os.arch());
console.log(os.totalmem() / (1024 * 1024 * 1024));
console.log(os.freemem() / (1024 * 1024 * 1024));
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());