//                                                                                             task1




class personAccount{
    constructor(firstName,lastName,income,expense,addInc,addExp){
        this.firstName = firstName, 
        this.lastName = lastName,
        this.income = income,
        this.expense = expense,
        this.addInc = addInc,
        this.addExp = addExp
    }
    totalIncome    = () => this.income + this.addInc
    totalExpenses  = () => this.expense + this.addExp
    accountBalance = () => `your current Account Balance is ${this.totalIncome() - this.totalExpenses()}`
}
const account = new personAccount("salman","imran",20000,16000,4000,1500);
console.log(account.accountBalance())



//                                                                                            task 2


//                                            -father of classes-


class autoMobile
        {
        constructor(name,model,color,type)
        {
            this.name = name,
            this.model = model,
            this.color = color,
            this.type = type
        }
            
            door = () => `your ${this.name} door's is open` 
            start = () => `your ${this.name} is ready for drive`
            
        }

//                                            -child classes-

    class car extends autoMobile{
        constructor(name,model,color,type,variant,speed){
            super(name,model,color,type)
            this.variant = variant,
            this.speed = speed
        }
        
    }
    class truck extends autoMobile{
        constructor(name,model,color,type,loadingCapacity,dieselConsumption){
            super(name,model,color,type)
            this.loadingCapacity = loadingCapacity,
            this.dieselConsumption = dieselConsumption
        }
        
    }
    class bus extends autoMobile{
        constructor(name,model,color,type,seats,petrolConsumption){
            super(name,model,color,type)
            this.seats = seats,
            this.petrolConsumption = petrolConsumption
        }
        
    }
const vehical = new autoMobile("ford",2019,"red","manual");
console.log(vehical);

