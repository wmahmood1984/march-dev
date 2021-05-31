import Web3 from 'web3'
import {VS2} from '../deployed/VS2'
import {YOLO} from '../deployed/YOLO'
import {YOLOYearly} from '../deployed/YOLOYearly'
import {YOLOMonthly} from '../deployed/YOLOMonthly'
import {YOLOWeekly} from '../deployed/YOLOWeekly'
import BigNumber  from 'bignumber.js'


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");




export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async(a,thunkApi)=>{
        

        try {
            if(Web3.givenProvider){
                const web3 = new Web3(Web3.givenProvider);
                await Web3.givenProvider.enable()
                const networkId = await web3.eth.net.getId()
                const VS2Address = "0x3FB2dD9fC94fBf559794D5bDbD2A4920C0f2239c"
                const YOLOAddress = "0xDD110ce8CC33591E4A2eE75498BB599FFDa60cD9"
                const YOLOYearlyAddress = "0xE44ca100977a15D02EF9187DC47F68f53045DEEE"
                const YOLOMonthlyAddress = "0x4e8d10A6dF0b19F7710d8Be253f1CBBf9C74d149"
                const YOLOWeeklyAddress = "0x9129D45961d961582b769A5563403Ad0b61C5A6A"
                //const network = VS2.networks[networkId]
                var VS2Contract = new web3.eth.Contract(VS2, VS2Address);
                var YOLOContract = new web3.eth.Contract(YOLO, YOLOAddress);
                var YOLOYearlyContract = new web3.eth.Contract(YOLOYearly, YOLOYearlyAddress);
                var YOLOMonthlyContract = new web3.eth.Contract(YOLOMonthly, YOLOMonthlyAddress);
                var YOLOWeeklyContract = new web3.eth.Contract(YOLOWeekly, YOLOWeeklyAddress);
                const addresses = await web3.eth.getAccounts()
                var address = addresses[0];
                thunkApi.dispatch(earnedFromYearly({
                    contract: YOLOYearlyContract,
                    address: address

                }))
                thunkApi.dispatch(earnedFromMonthly({
                    contract: YOLOMonthlyContract,
                    address: address

                }))
                thunkApi.dispatch(earnedFromWeekly({
                    contract: YOLOWeeklyContract,
                    address: address

                }))
                thunkApi.dispatch(balanceOfYearly({
                    contract: YOLOYearlyContract,
                    address: address

                }))
                thunkApi.dispatch(balanceOfMonthly({
                    contract: YOLOMonthlyContract,
                    address: address

                }))
                thunkApi.dispatch(balanceOfWeekly({
                    contract: YOLOWeeklyContract,
                    address: address

                }))
                thunkApi.dispatch(balanceOfTYearly({
                    contract: YOLOYearlyContract,
                    address: address

                }))
                thunkApi.dispatch(balanceOfTMonthly({
                    contract: YOLOMonthlyContract,
                    address: address

                }))
                thunkApi.dispatch(balanceOfTWeekly({
                    contract: YOLOWeeklyContract,
                    address: address

                }))
                thunkApi.dispatch(rewardOfYearly({
                    contract: YOLOYearlyContract,
                    address: address

                }))
                thunkApi.dispatch(rewardOfMonthly({
                    contract: YOLOMonthlyContract,
                    address: address

                }))
                thunkApi.dispatch(rewardOfWeekly({
                    contract: YOLOWeeklyContract,
                    address: address

                }))
                thunkApi.dispatch(decimalsOfVs2({
                    contract: VS2Contract,
                    address: address

                }))
                thunkApi.dispatch(reservesInV2({
                    contract: VS2Contract,
                    address: address

                }))
                


                return {
                    web3,
                    VS2Contract,
                    YOLOContract,
                    YOLOYearlyContract,
                    YOLOMonthlyContract,
                    YOLOWeeklyContract,
                    address : addresses[0],
                                   }
            }else {console.log("error in loading web3")}
        } catch (error) {
            console.log("Error", error)
        }

    }
)


export const balanceOfYearly = createAsyncThunk("balanceOfYearly",
    async ({contract, address})=>{
        try {
            const cacheTime = await contract.methods.stakeTime(address).call()
            const arrayResult = await contract.methods.balanceOf(address).call()
            
            return {arrayResult,cacheTime}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )


export const reservesInV2 = createAsyncThunk("reservesInV2",
    async ({contract, address})=>{
        try {
            const TotalSupply = await contract.methods.totalSupply().call()
            const Reserves = await contract.methods.getReserves().call()
            
            return {Reserves,TotalSupply};

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const balanceOfMonthly = createAsyncThunk("balanceOfMonthly",
    async ({contract, address})=>{
        try {

            const cacheTime = await contract.methods.stakeTime(address).call()
            const arrayResult = await contract.methods.balanceOf(address).call()

            return {arrayResult,cacheTime}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )
export const balanceOfWeekly = createAsyncThunk("balanceOfWeekly",
    async ({contract, address})=>{
        try {

            const cacheTime = await contract.methods.stakeTime(address).call()
            const arrayResult = await contract.methods.balanceOf(address).call()

            return {arrayResult,cacheTime}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const balanceOfTYearly = createAsyncThunk("balanceOfTYearly",
    async ({contract, address})=>{
        try {
          //  const cacheTime = await contract.methods.stakeTime(address).call()
            const arrayResult = await contract.methods._totalSupply().call()

            return arrayResult

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const balanceOfTMonthly = createAsyncThunk("balanceOfTMonthly",
    async ({contract, address})=>{
        try {

           // const cacheTime = await contract.methods.stakeTime(address).call()
            const arrayResult = await contract.methods._totalSupply().call()

            return {arrayResult}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )
export const balanceOfTWeekly = createAsyncThunk("balanceOfTWeekly",
    async ({contract, address})=>{
        try {

            //const cacheTime = await contract.methods.stakeTime(address).call()
            const arrayResult = await contract.methods._totalSupply().call()

            return {arrayResult}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

  export const earnedFromYearly = createAsyncThunk("earnedFromYearly",
      async ({contract, address})=>{
          try {
            //  const cacheTime = await contract.methods.stakeTime(address).call()
              const arrayResult = await contract.methods.earned(address).call()

              return arrayResult

          } catch (error) {
              console.log("Error in ArrayThunk",error)
          }
      }
      )
  export const earnedFromMonthly = createAsyncThunk("earnedFromMonthly",
      async ({contract, address})=>{
          try {
        //      const cacheTime = await contract.methods.stakeTime(address).call()
              const arrayResult = await contract.methods.earned(address).call()

              return arrayResult

          } catch (error) {
              console.log("Error in ArrayThunk",error)
          }
      }
      )

export const earnedFromWeekly = createAsyncThunk("earnedFromWeekly",
    async ({contract, address})=>{
        try {
        //    const cacheTime = await contract.methods.stakeTime(address).call()
            const arrayResult = await contract.methods.earned(address).call()

            return arrayResult

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const rewardOfYearly = createAsyncThunk("rewardOfYearly",
    async ({contract, address})=>{
        try {
            const rewardPerToken = await contract.methods.rewardPerToken().call();
            const arrayResult = await contract.methods.rewardRate().call()

            return {rewardOfYearly: arrayResult,rewardPerToken}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const rewardOfMonthly = createAsyncThunk("rewardOfMonthly",
    async ({contract, address})=>{
        try {

            const rewardPerToken = await contract.methods.rewardPerToken().call();
            const arrayResult = await contract.methods.rewardRate().call()

            return {rewardOfMonthly: arrayResult,rewardPerToken}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const rewardOfWeekly = createAsyncThunk("rewardOfWeekly",
    async ({contract, address})=>{
        try {

            const rewardPerToken = await contract.methods.rewardPerToken().call();
            const arrayResult = await contract.methods.rewardRate().call()

            return {rewardOfWeekly: arrayResult,rewardPerToken}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const decimalsOfVs2 = createAsyncThunk("decimalsOfVs2",
    async ({contract, address})=>{
        try {

            const decimals = await contract.methods.decimals().call();

           // console.log("decimals",decimals)
            return decimals

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const YearlyApproval = createAsyncThunk("YearlyApproval",
    async ({address,stackValue , StakingToken,sender})=>{
        try {

            var value = new BigNumber(stackValue*1000000000000000000)
            const result = await StakingToken.methods.approve(address,value).send({from : sender})
        //    const result = await StakingToken.methods.approve(address,stackValue).send({from : sender})
            
            console.log("data",address)
            return result;

        } catch (error) {
            console.log("Error in sendDataThunk",error)
        }
    }
    )

export const MonthlyApproval = createAsyncThunk("MonthlyApproval",
    async ({Maddress,MstackValue , StakingToken,sender})=>{
        try {
     //       var value = new BigNumber(MstackValue*1000000000000000000)
   //         const result = await StakingToken.methods.approve(Maddress,value).send({from : sender})
            const result = await StakingToken.methods.approve(Maddress,MstackValue).send({from : sender})
            return result;

        } catch (error) {
            console.log("Error in sendDataThunk",error)
        }
    }
    )

export const WeeklyApproval = createAsyncThunk("WeeklyApproval",
    async ({Waddress,WstackValue , StakingToken,sender})=>{
        try {
       //     var value = new BigNumber(WstackValue*1000000000000000000)
//            console.log("from server",StakingToken)
            //const result = await StakingToken.methods.approve(Waddress,value).send({from : sender})
            const result = await StakingToken.methods.approve(Waddress,WstackValue).send({from : sender})
            return result;

        } catch (error) {
            console.log("Error in sendDataThunk",error)
        }
    }
    )

export const YearlyStaking = createAsyncThunk("YearlyStaking",
    async ({stackValue,YOLOYearly,sender})=>{
        try {

//            var value = new BigNumber(stackValue*1000000000000000000)
//            const result = await YOLOYearly.methods.stake(stackValue).send({from : sender})
            const result = await YOLOYearly.methods.stake(stackValue).send({from : sender})
            return result;

        } catch (error) {
            console.log("Error in sendDataThunk",error)
        }
    }
    )

export const MonthlyStaking = createAsyncThunk("MonthlyStaking",
    async ({MstackValue,YOLOMonthly,sender})=>{
        try {

//            var value = new BigNumber(MstackValue*1000000000000000000)
            const result = await YOLOMonthly.methods.stake(MstackValue).send({from : sender})
            return result;

        } catch (error) {
            console.log("Error in sendDataThunk",error)
        }
    }
    )

export const WeeklyStaking = createAsyncThunk("WeeklyStaking",
    async ({WstackValue,YOLOWeekly,sender})=>{
        try {

//            var value = new BigNumber(WstackValue*1000000000000000000)
            const result = await YOLOWeekly.methods.stake(WstackValue).send({from : sender})
            return result;

        } catch (error) {
            console.log("Error in sendDataThunk",error)
        }
    }
    )

export const YearlyClaim = createAsyncThunk("YearlyClaim",
        async ({YOLOYearly,sender})=>{
            try {


                const result = await YOLOYearly.methods.getReward().send({from : sender})
                return result;

            } catch (error) {
                console.log("Error in sendDataThunk",error)
            }
        }
        )

export const MonthlyClaim = createAsyncThunk("MonthlyClaim",
        async ({YOLOMonthly,sender})=>{
            try {


                const result = await YOLOMonthly.methods.getReward().send({from : sender})
                return result;

            } catch (error) {
                console.log("Error in sendDataThunk",error)
            }
        }
        )

export const WeeklyClaim = createAsyncThunk("WeeklyClaim",
        async ({YOLOWeekly,sender})=>{
            try {


                const result = await YOLOWeekly.methods.getReward().send({from : sender})
                return result;

            } catch (error) {
                console.log("Error in sendDataThunk",error)
            }
        }
        )

export const YearlyWithdraw = createAsyncThunk("YearlyWithdraw",
    async ({stackValue,YOLOYearly,sender})=>{
        try {
//            var value = new BigNumber(stackValue*1000000000000000000)
            const result = await YOLOYearly.methods.withdraw(stackValue).send({from : sender})
            return result;

        } catch (error) {
            console.log("Error in sendDataThunk",error)
        }
    }
    )

export const MonthlyWithdraw = createAsyncThunk("YearlyWithdraw",
    async ({MstackValue,YOLOMonthly,sender})=>{
        try {
 //           var value = new BigNumber(MstackValue*1000000000000000000)
            const result = await YOLOMonthly.methods.withdraw(MstackValue).send({from : sender})
            return result;

        } catch (error) {
            console.log("Error in sendDataThunk",error)
        }
    }
    )

export const WeeklyWithdraw = createAsyncThunk("YearlyWithdraw",
    async ({WstackValue,YOLOWeekly,sender})=>{
        try {
//            var value = new BigNumber(WstackValue*1000000000000000000)
            const result = await YOLOWeekly.methods.withdraw(WstackValue).send({from : sender})
            return result;

        } catch (error) {
            console.log("Error in sendDataThunk",error)
        }
    }
    )






const adoptSlice = createSlice({
    name: "AdopSlice",
    initialState: {
        web3: null,
        YOLOContract: null,

        VS2Contract:null,
        YearlyContract:null,
        Reserves : null,
        MonthlyContract:null,
        WeeklyContract:null,
        YearlyContractAddress:null,
        MonthlyContractAddress:null,
        WeeklyContractAddress:null,
        address: null,
        balanceOfYearly: null,
        balanceOfMonthly: null,
        balanceOfWeekly : null,
        balanceOfTYearly: null,
        balanceOfTMonthly: null,
        balanceOfTWeekly : null,
        earnedFromYearly: null,
        earnedFromMonthly: null,
        earnedFromWeekly: null,
        rewardOfYearly: null,
        rewardOfMonthly: null,
        rewardOfWeekly : null,
        rewardPerTokenYearly:null,
        rewardPerTokenMonthly:null,
        rewardPerTokenWeekly:null,
        cacheTimeYearly:null,
        cacheTimeMonthly:null,
        cacheTimeWeekly:null,
        decimalsOfVs2: null,
        arrayAwait : false,
        toggle: false,
        TotalSupply : null,

    },
    reducers: {
        toggle : (state,actions)=>{
            state.toggle = !state.toggle;
        }
    },
    extraReducers: {
        [initWeb3.fulfilled] : (state,action)=>{
            state.web3 = action.payload.web3;
            state.VS2Contract = action.payload.VS2Contract;
            state.YOLOContract = action.payload.YOLOContract;
            state.YearlyContract = action.payload.YOLOYearlyContract;
            state.MonthlyContract = action.payload.YOLOMonthlyContract;
            state.WeeklyContract = action.payload.YOLOWeeklyContract;
            state.address = action.payload.address;
            state.YearlyContractAddress = action.payload.YOLOYearlyContract._address;
            state.MonthlyContractAddress = action.payload.YOLOMonthlyContract._address;
            state.WeeklyContractAddress = action.payload.YOLOWeeklyContract._address;

         },
         [earnedFromYearly.fulfilled] : (state,action)=>{
             state.earnedFromYearly = action.payload    
            // state.cacheTimeYearly = action.payload.cacheTime
         },
         [reservesInV2.fulfilled] : (state,action)=>{
           
            state.Reserves = action.payload.Reserves
            state.TotalSupply = action.payload.TotalSupply
 
        },
         [earnedFromMonthly.fulfilled] : (state,action)=>{
             state.earnedFromMonthly = action.payload
            // state.cacheTimeMonthly = action.payload.cacheTime
         },
         [earnedFromWeekly.fulfilled] : (state,action)=>{
             state.earnedFromWeekly = action.payload
           //  state.cacheTimeWeekly = action.payload.cacheTime
         },
        [balanceOfYearly.fulfilled] : (state,action)=>{
            state.balanceOfYearly = action.payload.arrayResult
            state.cacheTimeYearly = action.payload.cacheTime
        },
        [balanceOfMonthly.fulfilled] : (state,action)=>{
            state.balanceOfMonthly = action.payload.arrayResult
            state.cacheTimeMonthly = action.payload.cacheTime
        },
        [balanceOfWeekly.fulfilled] : (state,action)=>{
            state.balanceOfWeekly = action.payload.arrayResult
            state.cacheTimeWeekly = action.payload.cacheTime
        },
        [balanceOfTYearly.fulfilled] : (state,action)=>{
            state.balanceOfTYearly = action.payload
           // state.cacheTimeYearly = action.payload.cacheTime
        },
        [balanceOfTMonthly.fulfilled] : (state,action)=>{
            state.balanceOfTMonthly = action.payload.arrayResult
           // state.cacheTimeMonthly = action.payload.cacheTime
        },
        [balanceOfTWeekly.fulfilled] : (state,action)=>{
            state.balanceOfTWeekly = action.payload.arrayResult
           // state.cacheTimeWeekly = action.payload.cacheTime
        },
        [rewardOfYearly.fulfilled] : (state,action)=>{
            state.rewardOfYearly = action.payload.rewardOfYearly
            
            state.rewardPerTokenYearly = action.payload.rewardPerToken
        },
        [rewardOfMonthly.fulfilled] : (state,action)=>{
            state.rewardOfMonthly = action.payload.rewardOfMonthly
            state.rewardPerTokenMonthly = action.payload.rewardPerToken
        },
        [rewardOfWeekly.fulfilled] : (state,action)=>{
            state.rewardOfWeekly = action.payload.rewardOfWeekly
            state.rewardPerTokenWeekly = action.payload.rewardPerToken
        },
        [decimalsOfVs2.fulfilled] : (state,action)=>{

            state.decimalsOfVs2 = action.payload

        },
        [reservesInV2.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },


        [YearlyApproval.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [YearlyApproval.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [MonthlyApproval.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [MonthlyApproval.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [WeeklyApproval.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [WeeklyApproval.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [YearlyStaking.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [YearlyStaking.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [MonthlyStaking.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [MonthlyStaking.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [WeeklyStaking.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [WeeklyStaking.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [YearlyClaim.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [YearlyClaim.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [MonthlyClaim.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [MonthlyClaim.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [WeeklyClaim.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [WeeklyClaim.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [YearlyWithdraw.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [YearlyWithdraw.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [MonthlyWithdraw.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [MonthlyWithdraw.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },
        [WeeklyWithdraw.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
        },
        [WeeklyWithdraw.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;

        },

    }
})

export const adopreducer = adoptSlice.reducer;
export const { toggle } = adoptSlice.actions
