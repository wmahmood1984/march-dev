import React, { useState,useEffect } from "react";
import money from "../../images/money.png";
import clock from "../../images/clock.png";
import bnbLogo from "../../images/BNB+Logo.png";
import "./styles.css";
import YearTimer from "./YearTimer";
import MonthlyTimer from "./MonthlyTimer";
import WeeklyTimer from "./WeeklyTimer";
import { useDispatch, useSelector } from 'react-redux';
import { initWeb3,YearlyApproval,MonthlyApproval,WeeklyApproval,YearlyStaking,MonthlyStaking,WeeklyStaking,WeeklyClaim,MonthlyClaim,YearlyClaim,YearlyWithdraw,MonthlyWithdraw,WeeklyWithdraw } from '../../store/adoptSlice';
const labels = [
  {
    label: "Allocation:",
    key: "allocation",
    percent: false,
  },
  {
    label: "Stake Fee:",
    key: "stakeFee",
    percent: false,
  },
  {
    label: "Total Staked",
    key: "totalStaked",
    percent: false,
  },
  {
    label: "Early Unstake Fee",
    key: "earlyUnstakeFee",
    percent: true,
  },
];

const Main = ({ headerImage, middleImage, footerImage, price}) => {
const dispatch = useDispatch()
const [WstackValue, setWStackValue] = useState()
const [MstackValue, setMStackValue] = useState()
const [stackValue, setStackValue] = useState()






const StakingToken = useSelector((state)=>{
  return state.adoptReducer.VS2Contract;
});

const web3 = useSelector((state)=>{
  return state.adoptReducer.web3;
});
const sender = useSelector((state)=>{
  return state.adoptReducer.address;
});

//console.log("web3",web3 && web3.utils.toWei(toString(stackValue),"ether"))


const YOLOYearly = useSelector((state)=>{
  return state.adoptReducer.YearlyContract;
});

const address = useSelector((state)=>{
  return state.adoptReducer.YearlyContractAddress;
});

const setApprove = (e)=>{
  e.preventDefault()
      dispatch(YearlyApproval({address,stackValue , StakingToken,sender}))

}
const setStacking = (e)=>{
  e.preventDefault()
  dispatch(YearlyStaking({stackValue,YOLOYearly,sender}))
  setStackValue("")
}
const setwithdraw = (e)=>{
  e.preventDefault()
  dispatch(YearlyWithdraw({stackValue,YOLOYearly,sender}))
  setStackValue("")
}






const YOLOMonthly = useSelector((state)=>{
  return state.adoptReducer.MonthlyContract;
});

const Maddress = useSelector((state)=>{
  return state.adoptReducer.MonthlyContractAddress;
});


const setMApprove = (e)=>{
  e.preventDefault()
      dispatch(MonthlyApproval({Maddress,MstackValue , StakingToken,sender}))
}


const setMStacking = (e)=>{
  e.preventDefault()
  dispatch(MonthlyStaking({MstackValue,YOLOMonthly,sender}))
  setMStackValue("")
}

const setMwithdraw = (e)=>{
  e.preventDefault()
  dispatch(MonthlyWithdraw({MstackValue,YOLOMonthly,sender}))
  setMStackValue("")
}



const YOLOWeekly = useSelector((state)=>{
  return state.adoptReducer.WeeklyContract;
});

const Waddress = useSelector((state)=>{
  return state.adoptReducer.WeeklyContractAddress;
});


const setWApprove = (e)=>{
  e.preventDefault()
      dispatch(WeeklyApproval({Waddress,WstackValue , StakingToken,sender}))
}


const setWStacking = (e)=>{
  e.preventDefault()
  dispatch(WeeklyStaking({WstackValue,YOLOWeekly,sender}))
  setWStackValue("")
}

const setWClaim = (e)=>{
  e.preventDefault()
  dispatch(WeeklyClaim({YOLOWeekly,sender}))
}
const setMClaim = (e)=>{
  e.preventDefault()
  dispatch(MonthlyClaim({YOLOMonthly,sender}))
}
const setYClaim = (e)=>{
  e.preventDefault()
  dispatch(YearlyClaim({YOLOYearly,sender}))
}

const setWwithdraw = (e)=>{
  e.preventDefault()
  dispatch(WeeklyWithdraw({WstackValue,YOLOWeekly,sender}))
  setWStackValue("")
}


var Reserves = useSelector((state)=>{
  return state.adoptReducer.Reserves;
})

var VS2$ = Reserves && price && Math.sqrt(Reserves[0]*price.price_BNB*Reserves[1]*price.price/(Reserves[0]+Reserves[1])) 
var YOLO$ = price && price.price;
console.log("VS2",VS2$)
// // console.log("reserves BNB",Reserves && Reserves[0]*price.price_BNB)
// console.log("price_BNB",price && price.price_BNB)
// // console.log("reserve YOLO",Reserves && Reserves[1]*price.price)
// // console.log("price in yolo",price && price)
// // using the saved `dataKey`, get the variable we're interested in
var balanceOf = useSelector((state)=>{
  return state.adoptReducer.balanceOfYearly;
})



// using the saved `dataKey`, get the variable we're interested in
var balanceOfT = useSelector((state)=>{
  return state.adoptReducer.balanceOfTYearly;
})

// using the saved `dataKey`, get the variable we're interested in
var earnedYearly = useSelector((state)=>{
  return state.adoptReducer.earnedFromYearly;
})

// using the saved `dataKey`, get the variable we're interested in
var earnedWeekly = useSelector((state)=>{
  return state.adoptReducer.earnedFromWeekly;
})

var earnedMonthly = useSelector((state)=>{
  return state.adoptReducer.earnedFromMonthly;
})

//const balanceOf = null;
const Allocation = useSelector((state)=>{
  return state.adoptReducer.rewardOfYearly;
});
const RewardPerToken = useSelector((state)=>{
  return state.adoptReducer.rewardPerTokenYearly;
});;


const decimalsOfVs2 = useSelector((state)=>{
  return state.adoptReducer.decimalsOfVs2;
});




const StakeTime = useSelector((state)=>{
  return state.adoptReducer.cacheTimeYearly;
});

const MTbalanceOf = useSelector((state)=>{
  return state.adoptReducer.balanceOfTMonthly;
})

const MbalanceOf = useSelector((state)=>{
  return state.adoptReducer.balanceOfMonthly;
})
const MAllocation = useSelector((state)=>{
  return state.adoptReducer.rewardOfMonthly;
})
const MRewardPerToken = useSelector((state)=>{
  return state.adoptReducer.rewardPerTokenMonthly;
});;;

const MStakeTime = useSelector((state)=>{
  return state.adoptReducer.cacheTimeMonthly;
});;


const WbalanceOf = useSelector((state)=>{
  return state.adoptReducer.balanceOfWeekly;
});
const WTbalanceOf = useSelector((state)=>{
  return state.adoptReducer.balanceOfTWeekly;
});
const WAllocation = useSelector((state)=>{
  return state.adoptReducer.rewardOfWeekly;
});
const WRewardPerToken = useSelector((state)=>{
  return state.adoptReducer.rewardPerTokenWeekly;
});;;



const WStakeTime = useSelector((state)=>{
  return state.adoptReducer.cacheTimeWeekly;
});;












  const [weeklyData] = useState({
    apr: 0,
    allocation: 0,
    stakeFee: 0,
    totalStaked: 0,
    earlyUnstakeFee: 10,
  });
  const [monthlyData] = useState({
    apr: 0,
    allocation: 0,
    stakeFee: 0,
    totalStaked: 0,
    earlyUnstakeFee: 35,
  });
  const [yearlyData] = useState({
    apr: 0,
    allocation: 0,
    stakeFee: 0,
    totalStaked: 0,
    earlyUnstakeFee: 50,
  });

  return (
    <div className="main">
      <div
        className="header"
        style={{ backgroundImage: `url(${headerImage})` }}
      />
      <div className="middle-content">
        <div className="tvl-bar">
          <img src={money} className="icon" alt="Money Icon" />
          <div className="details">
            <div className="title">TOTAL VALUE LOCKED</div>
            <div className="custom">{(Number(balanceOfT/1e18)+Number(MTbalanceOf/1e18)+Number(WTbalanceOf/1e18))} LP</div>
          </div>
        </div>
        <div
          className="main-charts"
          style={{ backgroundImage: `url(${middleImage})` }}
        >
          {" "}
          <div className="title">THE WEEKLY POOL</div>
          <div className="title">THE MONTHLY POOL</div>
          <div className="title">THE YEARLY POOL</div>
          <div className="chart weekly">
            <div className="card">
              <div className="title">
                <img
                  src={bnbLogo}
                  className="image"
                  alt="SYOLO and BNB logos"
                />
                <div className="text">STAKE YOLO-BNB</div>
              </div>
              <div className="details">
                <div className="item percent">
                  <div className="label">APR:</div>
                  <div className="value">
                    ♾️
                  {/* {(Number(WbalanceOf) / 10**(Number(decimalsOfVs2)) * VS2$ / Number(WRewardPerToken) / 10**9 * YOLO$ *100).toFixed()
} {Number(WbalanceOf)/10**Number(decimalsOfVs2)*VS2$/ (WRewardPerToken/10**9* YOLO$) * 100*/}
</div>
                </div>
                <div className="stats">
                  {/* {labels.map((item) => (
                    <div className={`item ${item.percent ? "percent" : ""}`}>
                      <div className="label">{item.label}</div>
                      <div className="value">{weeklyData[item.key]}</div>
                    </div>
                  ))} */}
                <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Allocation</div>
                      <div className="value">{WAllocation && WAllocation}</div>
                    </div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Pending Claim:</div>
                      <div className="value">{earnedWeekly/1e9} YOLO</div>
                    </div>
                    <div className="btn withdraw-btn" onClick={setWClaim}>Claim Now</div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Stake Fee</div>
                      <div className="value">{/*weeklyData[1]*/}0 %</div>
                    </div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Total Staked</div>
                      <div className="value">{WTbalanceOf/1e18} LP</div>
                    </div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Your Stake</div>
                      <div className="value">{WbalanceOf/1e18} LP</div>
                    </div>
                    <div className={`item ${true ? "percent" : ""}`}>
                      <div className="label">Early UnStake Fee</div>
                      <div className="value">{10}</div>
                    </div>


                </div>
                <input className="input" type="number"
                value={WstackValue}
                onChange={(e)=>{setWStackValue(e.target.value)}}
                placeholder="Enter quantity"
                />
                <div className="first-btns">
                <div className="btn approve-btn" onClick={setWApprove}>Approve</div>
                  <div className="btn decline-btn" onClick={setWStacking}>Stake</div>
                </div>
                <div className="btn withdraw-btn" onClick={setWwithdraw}>Withdraw</div>
              </div>
            </div>
            <div className="countdown">
              <img src={clock} className="icon" alt="Clock Icon" />
              <div className="value"><WeeklyTimer stakeTime={WStakeTime && WStakeTime}></WeeklyTimer></div>
            </div>
          </div>
          <div className="chart monthly">
            <div className="card">
              <div className="title">
                <img
                  src={bnbLogo}
                  className="image"
                  alt="SYOLO and BNB logos"
                />
                <div className="text">STAKE YOLO-BNB</div>
              </div>
              <div className="details">
                <div className="item percent">
                  <div className="label">APR:</div>
                  <div className="value">
                     {"♾️ "}
                  {/*{Number(MbalanceOf)/10**Number(decimalsOfVs2)*VS2$/ (MRewardPerToken/10**9* YOLO$) * 100}*/}
                  </div>
                  </div>
                <div className="stats">
                  {/* {labels.map((item) => (
                    <div className={`item ${item.percent ? "percent" : ""}`}>
                      <div className="label">{item.label}</div>
                      <div className="value">{monthlyData[item.key]}</div>
                    </div>
                  ))} */}
                  <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Allocation</div>
                      <div className="value">{MAllocation/1e9} /s</div>
                    </div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Pending Claim:</div>
                      <div className="value">{earnedMonthly/1e9} YOLO</div>
                    </div>
                    <div className="btn withdraw-btn" onClick={setMClaim}>Claim Now</div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Stake Fee</div>
                      <div className="value">
                        0 %
                      {/*{yearlyData[1]}*/}
                      </div>
                    </div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Total Staked</div>
                      <div className="value">{MTbalanceOf/1e18} LP</div>
                    </div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Your Stake</div>
                      <div className="value">{MbalanceOf/1e18} LP</div>
                    </div>
                    <div className={`item ${true ? "percent" : ""}`}>
                      <div className="label">Early UnStake Fee</div>
                      <div className="value">{35}</div>
                    </div>
                </div>{" "}
                <input className="input" type="text"
                value={MstackValue}
                onChange={(e)=>{setMStackValue(e.target.value)}}
                placeholder="Enter quantity" />
                <div className="first-btns">
                <div className="btn approve-btn" onClick={setMApprove}>Approve</div>
                  <div className="btn decline-btn" onClick={setMStacking}>Stake</div>
                </div>
                <div className="btn withdraw-btn" onClick={setMwithdraw}>Withdraw</div>

              </div>
            </div>
            <div className="countdown">
              <img src={clock} className="icon" alt="Clock Icon" />
              <div className="value"><MonthlyTimer stakeTime={MStakeTime && MStakeTime}></MonthlyTimer></div>
            </div>
          </div>
          <div className="chart yearly">
            <div className="card">
              <div className="title">
                <img
                  src={bnbLogo}
                  className="image"
                  alt="SYOLO and BNB logos"
                />
                <div className="text">STAKE YOLO-BNB</div>
              </div>
              <div className="details">
                <div className="item percent">
                  <div className="label">APR:</div>
                  <div className="value">
                  {/*Number(balanceOf/1e18)*VS2$/ ((RewardPerToken/10**9)* YOLO$) * 1000*/}♾️</div>
                </div>
                <div className="stats">
                  {/* {labels.map((item) => (
                    <div className={`item ${item.percent ? "percent" : ""}`}>
                      <div className="label">{item.label}</div>
                      <div className="value">{yearlyData[item.key]}</div>
                    </div>
                  ))} */}
                  <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Allocation</div>
                      <div className="value">{Allocation/1e9} YOLO/s</div>
                    </div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Pending Claim:</div>
                      <div className="value">{earnedYearly/1e9} YOLO</div>
                    </div>
                    <div className="btn withdraw-btn" onClick={setYClaim}>Claim Now</div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Stake Fee</div>
                      <div className="value">{/*yearlyData[1]*/} 0 %</div>
                    </div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Total Staked</div>
                      <div className="value">{Number(balanceOfT)/(1e18) } LP</div>
                    </div>
                    <div className={`item ${false ? "percent" : ""}`}>
                      <div className="label">Your Stake:</div>
                      <div className="value">{Number(balanceOf)/(1e18)} LP</div>
                    </div>
                    <div className={`item ${true ? "percent" : ""}`}>
                      <div className="label">Early UnStake Fee</div>
                      <div className="value">{50}</div>
                    </div>


                </div>{" "}
                <input className="input"
                value={stackValue}
                onChange={(e)=>{setStackValue(e.target.value)}}
                type="text" placeholder="Enter quantity" />
                <div className="first-btns">
                  <div className="btn approve-btn" onClick={setApprove}>Approve</div>
                  <div className="btn decline-btn" onClick={setStacking}>Stake</div>
                </div>
                <div className="btn withdraw-btn" onClick={setwithdraw}>Withdraw</div>
              </div>
            </div>
            <div className="countdown">
              <img src={clock} className="icon" alt="Clock Icon" />
              <div className="value"><YearTimer stakeTime={StakeTime && StakeTime}></YearTimer></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <div className="text">EARN, STAKE, $YOLO </div>
      </div>
    </div>
  );
};
export default Main;
