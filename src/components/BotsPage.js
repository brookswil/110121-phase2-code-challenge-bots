import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


const API = 'http://localhost:8002/bots';

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(setBots);
  }, []);

  function enlistBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? {...b, enlist: true } : b )));
  }

  function releaseBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? {...b, enlist: false } : b )));
  }

  function dischargeBot(bot) {
    console.log('discharging', bot);
    setBots(bots.filter((b) => b.id !== bot.id));
  }

  return (
    <div>
      <YourBotArmy bots={bots.filter(b => b.enlist)} releaseBot={releaseBot} dischargeBot={dischargeBot}/>
      <BotCollection bots={bots} enlistBot={enlistBot} dischargeBot={dischargeBot}/>
    </div>
  )
}

export default BotsPage;
