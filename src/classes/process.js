// 1) В програмі є структура процесу. 
// В цій структурі вказується час роботи процесу (весь час в програмі вимірюється в кількості звернень до пам'яті) і розмір його адресного простору. 

const randomInt = require("../utils/random-int");

class Process{

    constructor(config){

        if(!config.id)
            throw new Error("process id is required");

        if(!config.maxWorkTime)
            throw new Error("process work time is required");
    
        if(!config.virtualAddressSpaceMaxSize)
            throw new Error("virtualAddressSpaceMaxSize is required");

        if(!config.kernel)
            throw new Error("kernel is required");
        
        this.id = config.id;
        this.maxWorkTime = config.maxWorkTime;
        this.virtualAddressSpaceMaxSize = config.virtualAddressSpaceMaxSize;
        this.kernel = config.kernel;

        this.workTime = 0;
        this.virtualPages = new Set();

        this.init();
        
    }

    init(){
        this.kernel.createVirtualAddressSpace(this.id);
    }

    setData(data){

        if(this.virtualAddressSpaceMaxSize <= this.virtualPages.size)
            throw new Error("You reach page limit for process");

        // this.virtualPages.add(this.kernel.setPage(this.id, data));
        // this.virtualPages.add(randomInt(1, 10101010101010101010101));

    }

    start(config){

        let timeout = 0;

        if(!config || !config.timeout)
            timeout = randomInt(1, 10);

        this.workTime++
        
        if(this.workTime >= this.maxWorkTime){
            this.close();
        }
        else{

            setTimeout(() => {
                
                this.start()
    
            }, timeout);

        }

    }

    close(){

        this.kernel.deleteVirtualAddressSpace(this.id);
         
    }

}

module.exports = Process;