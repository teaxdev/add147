class PersonalComputer {
    constructor(cpu, gpu, ram, storage) {
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.storage = storage;
    }

    pcBuild() {
        return `Your PC has a ${this.cpu} a ${this.gpu} gpu, ${this.ram} of ram and ${this.storage} of storage`;
    }
}

const myPc = new PersonalComputer('Intel i7 10000k', 'NVIDIA 20000 TI', '256gb', '16TB');

document.getElementById('stat1').innerHTML = myPc.cpu;
document.getElementById('stat2').innerHTML = myPc.gpu;
document.getElementById('stat3').innerHTML = myPc.ram;
document.getElementById('stat4').innerHTML = myPc.storage;

document.getElementById('build').innerHTML = myPc.pcBuild();