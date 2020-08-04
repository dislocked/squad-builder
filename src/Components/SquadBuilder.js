import React, {useLayoutEffect, useState, useEffect} from 'react'
import {doSomethingWithInput, justAnAlert, steamid_to_64bit, getOverall, getPosition} from './Util.js'


import * as SteamID from '@node-steam/id';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import '../App.css';


// importamos AXIOS que nos sirve hacer los fetch con las API
import axios from 'axios';

import {
  fromAccountID,
  ID,
  Instance,
  Type,
  Universe,
} from '@node-steam/id';

function SquadBuilder(){

    //Creamos los hooks que usaremos a lo largo de todo el programa para identificar las estadisticas
    const [name, setName] = useState(0);
    const [name2, setName2] = useState(0);
    const [name3, setName3] = useState(0);
    const [name4, setName4] = useState(0);
    const [name5, setName5] = useState(0);
    const [name6, setName6] = useState(0);

    const [team, setTeam] = useState(0);
    const [team2, setTeam2] = useState(0);
    const [team3, setTeam3] = useState(0);
    const [team4, setTeam4] = useState(0);
    const [team5, setTeam5] = useState(0);
    const [team6, setTeam6] = useState(0);

    const [ovr, setOvr] = useState(0);
    const [ovr2, setOvr2] = useState(0);
    const [ovr3, setOvr3] = useState(0);
    const [ovr4, setOvr4] = useState(0);
    const [ovr5, setOvr5] = useState(0);
    const [ovr6, setOvr6] = useState(0);

    const [pos, setPos] = useState(0);
    const [pos2, setPos2] = useState(0);
    const [pos3, setPos3] = useState(0);
    const [pos4, setPos4] = useState(0);
    const [pos5, setPos5] = useState(0);
    const [pos6, setPos6] = useState(0);

    const [CP, setCP] = useState(0);
    const [CP2, setCP2] = useState(0);
    const [CP3, setCP3] = useState(0);
    const [CP4, setCP4] = useState(0);
    const [CP5, setCP5] = useState(0);
    const [CP6, setCP6] = useState(0);

    const [AD, setAD] = useState(0);
    const [AD2, setAD2] = useState(0);
    const [AD3, setAD3] = useState(0);
    const [AD4, setAD4] = useState(0);
    const [AD5, setAD5] = useState(0);
    const [AD6, setAD6] = useState(0);

    const [AF, setAF] = useState(0);
    const [AF2, setAF2] = useState(0);
    const [AF3, setAF3] = useState(0);
    const [AF4, setAF4] = useState(0);
    const [AF5, setAF5] = useState(0);
    const [AF6, setAF6] = useState(0);

    const [CC, setCC] = useState(0);
    const [CC2, setCC2] = useState(0);
    const [CC3, setCC3] = useState(0);
    const [CC4, setCC4] = useState(0);
    const [CC5, setCC5] = useState(0);
    const [CC6, setCC6] = useState(0);

    const [steamID, setSteamID] = useState(0);
    const [goals, setGoals] = useState(0);
    const [matches, setMatches] = useState(0);
    const [assists, setAssists] = useState(0);
    const [shots, setShots] = useState(0);
    const [shotsontarget, setShotsontarget] = useState(0);
    const [passes, setPasses] = useState(0);
    const [passescompleted, setPassescompleted] = useState(0);
    const [interceptions, setInterceptions] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [offsides, setOffsides] = useState(0);
    const [tackles, setTackles] = useState(0);
    const [tacklescompleted, setTacklescompleted] = useState(0);
    const [possession, setPossession] = useState(0);
    const [saves, setSaves] = useState(0);
    const [savescaught, setSavescaught] = useState(0);
    const [goalsconceded, setGoalsconceded] = useState(0);
    const [secondsplayed, setSecondsplayed] = useState(0);
    const [totalmatches, setTotalmatches] = useState(0);

    const [passavg, setPassavg] = useState(0);
    const [assistavg, setAssistavg] = useState(0);
    const [posavg, setPosavg] = useState(0);
    const [attackassistavg, setAttackassistavg] = useState(0);
    const [interavg, setInteravg] = useState(0);
    const [tackleavg, setTackleavg] = useState(0);
    const [finavg, setFinavg] = useState(0);
    const [preavg, setPreavg] = useState(0);
    const [savesavg, setSavesavg] = useState(0);
    const [savespercentavg, setSavespercentavg] = useState(0);
    const [concededavg, setConcededavg] = useState(0);

    const [t0, setT0] = useState(0);
    const [t1, setT1] = useState(0);
    const [t2, setT2] = useState(0);
    const [t3, setT3] = useState(0);
    const [t4, setT4] = useState(0);
    const [t5, setT5] = useState(0);
    const [t0real, setT0real] = useState(true);
    const [t1real, setT1real] = useState(true);
    const [t2real, setT2real] = useState(true);
    const [t3real, setT3real] = useState(true);
    const [t4real, setT4real] = useState(true);
    const [t5real, setT5real] = useState(true);
    const [america, setAmerica] = useState(0);
    const [maradei, setMaradei] = useState(0);
    const [master, setMaster] = useState(0);
    const [maradeireal, setMaradeireal] = useState(true);
    const [masterreal, setMasterreal] = useState(true);
    const [americareal, setAmericareal] = useState(true);
    const [maradeiteam, setMaradeiteam] = useState(0);
    const [masterteam, setMasterteam] = useState(0);
    const [americateam, setAmericateam] = useState(0);
    const [t0team, setT0team] = useState(0);
    const [t1team, setT1team] = useState(0);
    const [t2team, setT2team] = useState(0);
    const [t3team, setT3team] = useState(0);
    const [t4team, setT4team] = useState(0);
    const [t5team, setT5team] = useState(0);
    
    const players = require("./players.json");
    const torneos = require("./torneos.json");
    const formations = require("./formations.json");
    const [playerID, setPlayerID] = useState("STEAM_0:1:102557870");
    const [playerID2, setPlayerID2] = useState("STEAM_0:1:198516942");
    const [playerID3, setPlayerID3] = useState("STEAM_0:0:42043307");
    const [playerID4, setPlayerID4] = useState("STEAM_0:1:199826615");
    const [playerID5, setPlayerID5] = useState("STEAM_0:1:123682146");
    const [playerID6, setPlayerID6] = useState("STEAM_0:1:32295184");
    const [tID, setTID] = useState("all");
    const [formationID, setFormationID] = useState("4");

    const [url, setCount] = useState(0);
    const [avatar, setAvatar] = useState([]);
    const idd = new ID(playerID);
    const [actualovr, setActualovr] = useState("0");
    const [id, setId] = useState(0);
    const [id2, setId2] = useState(0);
    const [id3, setId3] = useState(0);
    const [id4, setId4] = useState(0);
    const [id5, setId5] = useState(0);
    const [id6, setId6] = useState(0);
  
    const SteamAPI = require('steamapi');
    const steam = new SteamAPI('XDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');

    const totaltime = secondsplayed/60/90 > matches ? matches : secondsplayed/60/90;
    console.log("a ver el totaltime");
    console.log(totaltime);
    console.log(secondsplayed/60/90);
    console.log(matches);
    //window size

    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    React.useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
    });
    console.log("Tamaño de la pantalla: "+width+"x"+height);

    // creamos la variable theteam para convertir el nombre del equipo a sus iniciales, y que de esta forma los banners sean visibles (se buguea si tiene espacios)
    const theteam = team.toString().toLowerCase() == 
    "meteors gaming" ? "mg" : 
    team.toString().toLowerCase() == "coldchester fc" ? "ccfc" : 
    team.toString().toLowerCase() == "inter" ? "inter" : 
    team.toString().toLowerCase() == "galactic boys" ? "gb" : 
    team.toString().toLowerCase() == "los magorditos" ? "mago" :
    team.toString().toLowerCase() == "viral team" ? "viral" :
    team.toString().toLowerCase() == "layuve" ? "layuve" :
    team.toString().toLowerCase() == "velez sarsfield" ? "velez" :
    team.toString().toLowerCase() == "merca doçura" ? "mds" :
    team.toString().toLowerCase() == "peñarol" ? "peñarol" :
    team.toString().toLowerCase() == "ac milanesa" ? "acm" : "0"
    ;
    const temporada = tID == 
    "t1" ? "Temporada 1" : 
    tID == "master" ? "Copa Master" : 
    tID == "t2" ? "Temporada 2" : 
    tID == "t3" ? "Temporada 3" : 
    tID == "t4" ? "Temporada 4" :
    tID == "t0" ? "Temporada 0" :
    tID == "t5" ? "Temporada 5" :
    tID == "maradei" ? "Copa Maradei" : 
    tID == "copaamerica" ? "Copa America" :
    "Total"
    ;
    console.log(theteam);
    
    const fetchUser3 = async () => {
      const apiCallA = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID2}/t1`);
      const apiCallB = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID2}/t2`);
      const apiCallC = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID2}/t3`);
      const apiCallD = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID2}/t4`);
      const apiCallE = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID2}/t5`);
      const apiCallF = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID2}/t0`);
      const userA = await apiCallA.json();
      const userB = await apiCallB.json();
      const userC = await apiCallC.json();
      const userD = await apiCallD.json();
      const userE = await apiCallE.json();
      const userF = await apiCallF.json();
      
      const totaltimet1 = userA[0] != undefined? (userA[0].secondsplayed/60/90 > userA[0].matches ? userA[0].matches : userA[0].secondsplayed/60/90) : 0;
      console.log("El total time de la T1 es: "+totaltimet1);
      const totaltimet2 = userB[0] != undefined? userB[0].secondsplayed/60/90 > userB[0].matches ? userB[0].matches : userB[0].secondsplayed/60/90 : 0;
      console.log("El total time de la T2 es: "+totaltimet2);
      const totaltimet3 = userC[0] != undefined ? ( userC[0].secondsplayed/60/90 > userC[0].matches ? userC[0].matches : userC[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T3 es: "+totaltimet3);
      const totaltimet4 = userD[0] != undefined ? ( userD[0].secondsplayed/60/90 > userD[0].matches ? userD[0].matches : userD[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T4 es: "+ totaltimet4);
      const totaltimet5 = userE[0] != undefined ? ( userE[0].secondsplayed/60/90 > userE[0].matches ? userE[0].matches : userE[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T1 es: "+totaltimet5);
      const totaltimet0 = userF[0] != undefined ? ( userF[0].secondsplayed/60/90 > userF[0].matches ? userF[0].matches : userF[0].secondsplayed/60/90 ) : 0;
      const actualtime = Math.round(totaltimet1+totaltimet2+totaltimet3+totaltimet4+totaltimet5+totaltimet0);

      const apiCall = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID2}/${tID}`);
      const user = await apiCall.json();
      //call setName below to change the state 'name'
      // fetch inicial, por default agarra la playerID mia y la temporada es la de "all"
      
      setName2(user[0].name);
      setTeam2(user[0].team);

      setId2(steamid_to_64bit(playerID2));
      document.title = user[0].name;
      let PASS = Math.round(user[0].passescompleted/actualtime*5);
      let ASISS = Math.round(user[0].assists/actualtime*140);
      let TACKLE = Math.round(user[0].tacklescompleted/user[0].tackles*100*4.5);
      let POSS = Math.round(user[0].possession*8);
      let INTER = Math.round((user[0].interceptions/actualtime*2.5+user[0].tacklescompleted/actualtime)*2.05);
      let FIN = Math.round(user[0].goals/actualtime*70);
      let PRE = Math.round((user[0].shotsontarget/user[0].shots*100));
      let SAVEPERCENT = Math.round((user[0].savescaught/user[0].saves)*100);
      let ATASISS = Math.round(doSomethingWithInput(ASISS));
      let SAVE = Math.round((user[0].saves/actualtime*11));
      let SAVES = user[0].saves;
      if(SAVES==0){
        SAVES=1;
      }
      let CONCEDED = Math.abs(((user[0].goalsconceded-user[0].saves)/SAVES*100));
      
      console.log("ESTE ES EL PASS"+PASS+" ---- "+user[0].passescompleted/totaltime*5);

      const CP = (SAVE+SAVEPERCENT+CONCEDED)/3;
      setCP2(doSomethingWithInput((SAVE+SAVEPERCENT+CONCEDED)/3));
      const CC = Math.round((PASS+ASISS+POSS)/3)
      setCC2(doSomethingWithInput(((PASS+ASISS+POSS)/3)));
      const AF = (FIN+PRE+ATASISS)/3;
      setAF2(doSomethingWithInput(((FIN+PRE+ATASISS)/3)));
      const AD = INTER;
      setAD2(doSomethingWithInput(INTER));

      /*const val_def = (AD * 2.8 + AF / 3 + CC / 2.5)/3;
      const val_del = ( AF * 2.8 + AD / 3 + CC / 2.5)/3;
      const val_mca = ( CC * 2.8 + AD / 5.8 + AF * 0.5) / 3;
      const val_mcd = ( CC * 2.8 + AD * 0.5 + AF / 5.8) / 3;
      */
      const val_def = (AD * 2.3 + AF / 2.5 + CC / 2)/3;
      const val_del = ( AF * 2.3 + AD / 2.5 + CC / 2)/3;
      const val_mca = ( CC + AF ) / 2;
      const val_mcd = ( CC + AD ) / 2;
      let val_gk = CP;
      val_gk = val_gk || 0;
      setOvr2(Math.round(doSomethingWithInput(getOverall(val_del, val_def, val_mca, val_mcd, val_gk))));
      setPos2(getPosition(val_del, val_def, val_mca, val_mcd, val_gk));
      console.log("la posicion que tira la funcion es: " + getPosition(val_del, val_def, val_mca, val_mcd, val_gk));
      console.log("ESTO ES UN TEST DEL AD / CB TOTAL DE PERFIL 2 -> "+AD+" / "+ovr2)
    }

    const fetchUser4 = async () => {
      const apiCallA = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID3}/t1`);
      const apiCallB = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID3}/t2`);
      const apiCallC = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID3}/t3`);
      const apiCallD = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID3}/t4`);
      const apiCallE = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID3}/t5`);
      const apiCallF = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID3}/t0`);
      const userA = await apiCallA.json();
      const userB = await apiCallB.json();
      const userC = await apiCallC.json();
      const userD = await apiCallD.json();
      const userE = await apiCallE.json();
      const userF = await apiCallF.json();
      
      const totaltimet1 = userA[0] != undefined? (userA[0].secondsplayed/60/90 > userA[0].matches ? userA[0].matches : userA[0].secondsplayed/60/90) : 0;
      console.log("El total time de la T1 es: "+totaltimet1);
      const totaltimet2 = userB[0] != undefined? userB[0].secondsplayed/60/90 > userB[0].matches ? userB[0].matches : userB[0].secondsplayed/60/90 : 0;
      console.log("El total time de la T2 es: "+totaltimet2);
      const totaltimet3 = userC[0] != undefined ? ( userC[0].secondsplayed/60/90 > userC[0].matches ? userC[0].matches : userC[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T3 es: "+totaltimet3);
      const totaltimet4 = userD[0] != undefined ? ( userD[0].secondsplayed/60/90 > userD[0].matches ? userD[0].matches : userD[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T4 es: "+ totaltimet4);
      const totaltimet5 = userE[0] != undefined ? ( userE[0].secondsplayed/60/90 > userE[0].matches ? userE[0].matches : userE[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T1 es: "+totaltimet5);
      const totaltimet0 = userF[0] != undefined ? ( userF[0].secondsplayed/60/90 > userF[0].matches ? userF[0].matches : userF[0].secondsplayed/60/90 ) : 0;
      const actualtime = Math.round(totaltimet1+totaltimet2+totaltimet3+totaltimet4+totaltimet5+totaltimet0);

      const apiCall = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID3}/${tID}`);
      const user = await apiCall.json();
      //call setName below to change the state 'name'
      // fetch inicial, por default agarra la playerID mia y la temporada es la de "all"
      setName3(user[0].name);
      setTeam3(user[0].team);

      setId3(steamid_to_64bit(playerID3));
      document.title = user[0].name;
      let PASS = Math.round(user[0].passescompleted/actualtime*5);
      let ASISS = Math.round(user[0].assists/actualtime*140);
      let TACKLE = Math.round(user[0].tacklescompleted/user[0].tackles*100*4.5);
      let POSS = Math.round(user[0].possession*8);
      let INTER = Math.round((user[0].interceptions/actualtime*2.5+user[0].tacklescompleted/actualtime)*2.05);
      let FIN = Math.round(user[0].goals/actualtime*70);
      let PRE = Math.round((user[0].shotsontarget/user[0].shots*100));
      let SAVEPERCENT = Math.round((user[0].savescaught/user[0].saves)*100);
      let ATASISS = Math.round(doSomethingWithInput(ASISS));
      let SAVE = Math.round((user[0].saves/actualtime*11));
      let SAVES = user[0].saves;
      if(SAVES==0){
        SAVES=1;
      }
      let CONCEDED = Math.abs(((user[0].goalsconceded-user[0].saves)/SAVES*100));
      
      console.log("ESTE ES EL PASS"+PASS+" ---- "+user[0].passescompleted/totaltime*5);

      const CP = (SAVE+SAVEPERCENT+CONCEDED)/3;
      setCP3(doSomethingWithInput((SAVE+SAVEPERCENT+CONCEDED)/3));
      const CC = Math.round((PASS+ASISS+POSS)/3)
      setCC3(doSomethingWithInput(((PASS+ASISS+POSS)/3)));
      const AF = (FIN+PRE+ATASISS)/3;
      setAF3(doSomethingWithInput(((FIN+PRE+ATASISS)/3)));
      const AD = INTER;
      setAD3(doSomethingWithInput(INTER));
      /*const val_def = (AD * 2.8 + AF / 3 + CC / 2.5)/3;
      const val_del = ( AF * 2.8 + AD / 3 + CC / 2.5)/3;
      const val_mca = ( CC * 2.8 + AD / 5.8 + AF * 0.5) / 3;
      const val_mcd = ( CC * 2.8 + AD * 0.5 + AF / 5.8) / 3;
      */
      const val_def = (AD * 2.3 + AF / 2.5 + CC / 2)/3;
      const val_del = ( AF * 2.3 + AD / 2.5 + CC / 2)/3;
      const val_mca = ( CC + AF ) / 2;
      const val_mcd = ( CC + AD ) / 2;
      let val_gk = CP;
      val_gk = val_gk || 0;
      setPos3(getPosition(val_del, val_def, val_mca, val_mcd, val_gk));
      setOvr3(Math.round(doSomethingWithInput(getOverall(val_del, val_def, val_mca, val_mcd, val_gk))));
    }

    const fetchUser5 = async () => {
      const apiCallA = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID4}/t1`);
      const apiCallB = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID4}/t2`);
      const apiCallC = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID4}/t3`);
      const apiCallD = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID4}/t4`);
      const apiCallE = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID4}/t5`);
      const apiCallF = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID4}/t0`);
      const userA = await apiCallA.json();
      const userB = await apiCallB.json();
      const userC = await apiCallC.json();
      const userD = await apiCallD.json();
      const userE = await apiCallE.json();
      const userF = await apiCallF.json();
      
      const totaltimet1 = userA[0] != undefined? (userA[0].secondsplayed/60/90 > userA[0].matches ? userA[0].matches : userA[0].secondsplayed/60/90) : 0;
      console.log("El total time de la T1 es: "+totaltimet1);
      const totaltimet2 = userB[0] != undefined? userB[0].secondsplayed/60/90 > userB[0].matches ? userB[0].matches : userB[0].secondsplayed/60/90 : 0;
      console.log("El total time de la T2 es: "+totaltimet2);
      const totaltimet3 = userC[0] != undefined ? ( userC[0].secondsplayed/60/90 > userC[0].matches ? userC[0].matches : userC[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T3 es: "+totaltimet3);
      const totaltimet4 = userD[0] != undefined ? ( userD[0].secondsplayed/60/90 > userD[0].matches ? userD[0].matches : userD[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T4 es: "+ totaltimet4);
      const totaltimet5 = userE[0] != undefined ? ( userE[0].secondsplayed/60/90 > userE[0].matches ? userE[0].matches : userE[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T1 es: "+totaltimet5);
      const totaltimet0 = userF[0] != undefined ? ( userF[0].secondsplayed/60/90 > userF[0].matches ? userF[0].matches : userF[0].secondsplayed/60/90 ) : 0;
      const actualtime = Math.round(totaltimet1+totaltimet2+totaltimet3+totaltimet4+totaltimet5+totaltimet0);

      const apiCall = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID4}/${tID}`);
      const user = await apiCall.json();
      //call setName below to change the state 'name'
      // fetch inicial, por default agarra la playerID mia y la temporada es la de "all"
      setName4(user[0].name);
      setTeam4(user[0].team);

      setId4(steamid_to_64bit(playerID4));
      document.title = user[0].name;
      let PASS = Math.round(user[0].passescompleted/actualtime*5);
      let ASISS = Math.round(user[0].assists/actualtime*140);
      let TACKLE = Math.round(user[0].tacklescompleted/user[0].tackles*100*4.5);
      let POSS = Math.round(user[0].possession*8);
      let INTER = Math.round((user[0].interceptions/actualtime*2.5+user[0].tacklescompleted/actualtime)*2.05);
      let FIN = Math.round(user[0].goals/actualtime*70);
      let PRE = Math.round((user[0].shotsontarget/user[0].shots*100));
      let SAVEPERCENT = Math.round((user[0].savescaught/user[0].saves)*100);
      let ATASISS = Math.round(doSomethingWithInput(ASISS));
      let SAVE = Math.round((user[0].saves/actualtime*11));
      let SAVES = user[0].saves;
      if(SAVES==0){
        SAVES=1;
      }
      let CONCEDED = Math.abs(((user[0].goalsconceded-user[0].saves)/SAVES*100));
      
      console.log("ESTE ES EL PASS"+PASS+" ---- "+user[0].passescompleted/totaltime*5);

      const CP = (SAVE+SAVEPERCENT+CONCEDED)/3;
      setCP4(doSomethingWithInput((SAVE+SAVEPERCENT+CONCEDED)/3));
      const CC = Math.round((PASS+ASISS+POSS)/3)
      setCC4(doSomethingWithInput(((PASS+ASISS+POSS)/3)));
      const AF = (FIN+PRE+ATASISS)/3;
      setAF4(doSomethingWithInput(((FIN+PRE+ATASISS)/3)));
      const AD = INTER;
      setAD4(doSomethingWithInput(INTER));
      /*const val_def = (AD * 2.8 + AF / 3 + CC / 2.5)/3;
      const val_del = ( AF * 2.8 + AD / 3 + CC / 2.5)/3;
      const val_mca = ( CC * 2.8 + AD / 5.8 + AF * 0.5) / 3;
      const val_mcd = ( CC * 2.8 + AD * 0.5 + AF / 5.8) / 3;
      */
      const val_def = (AD * 2.3 + AF / 2.5 + CC / 2)/3;
      const val_del = ( AF * 2.3 + AD / 2.5 + CC / 2)/3;
      const val_mca = ( CC + AF ) / 2;
      const val_mcd = ( CC + AD ) / 2;
      let val_gk = CP;
      val_gk = val_gk || 0;
      setPos4(getPosition(val_del, val_def, val_mca, val_mcd, val_gk));
      setOvr4(Math.round(doSomethingWithInput(getOverall(val_del, val_def, val_mca, val_mcd, val_gk))));
    }

    const fetchUser6 = async () => {
      const apiCallA = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID5}/t1`);
      const apiCallB = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID5}/t2`);
      const apiCallC = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID5}/t3`);
      const apiCallD = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID5}/t4`);
      const apiCallE = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID5}/t5`);
      const apiCallF = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID5}/t0`);
      const userA = await apiCallA.json();
      const userB = await apiCallB.json();
      const userC = await apiCallC.json();
      const userD = await apiCallD.json();
      const userE = await apiCallE.json();
      const userF = await apiCallF.json();
      
      const totaltimet1 = userA[0] != undefined? (userA[0].secondsplayed/60/90 > userA[0].matches ? userA[0].matches : userA[0].secondsplayed/60/90) : 0;
      console.log("El total time de la T1 es: "+totaltimet1);
      const totaltimet2 = userB[0] != undefined? userB[0].secondsplayed/60/90 > userB[0].matches ? userB[0].matches : userB[0].secondsplayed/60/90 : 0;
      console.log("El total time de la T2 es: "+totaltimet2);
      const totaltimet3 = userC[0] != undefined ? ( userC[0].secondsplayed/60/90 > userC[0].matches ? userC[0].matches : userC[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T3 es: "+totaltimet3);
      const totaltimet4 = userD[0] != undefined ? ( userD[0].secondsplayed/60/90 > userD[0].matches ? userD[0].matches : userD[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T4 es: "+ totaltimet4);
      const totaltimet5 = userE[0] != undefined ? ( userE[0].secondsplayed/60/90 > userE[0].matches ? userE[0].matches : userE[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T1 es: "+totaltimet5);
      const totaltimet0 = userF[0] != undefined ? ( userF[0].secondsplayed/60/90 > userF[0].matches ? userF[0].matches : userF[0].secondsplayed/60/90 ) : 0;
      const actualtime = Math.round(totaltimet1+totaltimet2+totaltimet3+totaltimet4+totaltimet5+totaltimet0);

      const apiCall = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID5}/${tID}`);
      const user = await apiCall.json();
      //call setName below to change the state 'name'
      // fetch inicial, por default agarra la playerID mia y la temporada es la de "all"
      setName5(user[0].name);
      setTeam5(user[0].team);

      setId5(steamid_to_64bit(playerID5));
      document.title = user[0].name;
      let PASS = Math.round(user[0].passescompleted/actualtime*5);
      let ASISS = Math.round(user[0].assists/actualtime*140);
      let TACKLE = Math.round(user[0].tacklescompleted/user[0].tackles*100*4.5);
      let POSS = Math.round(user[0].possession*8);
      let INTER = Math.round((user[0].interceptions/actualtime*2.5+user[0].tacklescompleted/actualtime)*2.05);
      let FIN = Math.round(user[0].goals/actualtime*70);
      let PRE = Math.round((user[0].shotsontarget/user[0].shots*100));
      let SAVEPERCENT = Math.round((user[0].savescaught/user[0].saves)*100);
      let ATASISS = Math.round(doSomethingWithInput(ASISS));
      let SAVE = Math.round((user[0].saves/actualtime*11));
      let SAVES = user[0].saves;
      if(SAVES==0){
        SAVES=1;
      }
      let CONCEDED = Math.abs(((user[0].goalsconceded-user[0].saves)/SAVES*100));
      
      console.log("ESTE ES EL PASS"+PASS+" ---- "+user[0].passescompleted/totaltime*5);

      const CP = (SAVE+SAVEPERCENT+CONCEDED)/3;
      setCP5(doSomethingWithInput((SAVE+SAVEPERCENT+CONCEDED)/3));
      const CC = Math.round((PASS+ASISS+POSS)/3)
      setCC5(doSomethingWithInput(((PASS+ASISS+POSS)/3)));
      const AF = (FIN+PRE+ATASISS)/3;
      setAF5(doSomethingWithInput(((FIN+PRE+ATASISS)/3)));
      const AD = INTER;
      setAD5(doSomethingWithInput(INTER));
      /*const val_def = (AD * 2.8 + AF / 3 + CC / 2.5)/3;
      const val_del = ( AF * 2.8 + AD / 3 + CC / 2.5)/3;
      const val_mca = ( CC * 2.8 + AD / 5.8 + AF * 0.5) / 3;
      const val_mcd = ( CC * 2.8 + AD * 0.5 + AF / 5.8) / 3;
      */
      const val_def = (AD * 2.3 + AF / 2.5 + CC / 2)/3;
      const val_del = ( AF * 2.3 + AD / 2.5 + CC / 2)/3;
      const val_mca = ( CC + AF ) / 2;
      const val_mcd = ( CC + AD ) / 2;
      let val_gk = CP;
      val_gk = val_gk || 0;
      setPos5(getPosition(val_del, val_def, val_mca, val_mcd, val_gk));
      setOvr5(Math.round(doSomethingWithInput(getOverall(val_del, val_def, val_mca, val_mcd, val_gk))));
    }

    const fetchUser7 = async () => {
      const apiCallA = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID6}/t1`);
      const apiCallB = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID6}/t2`);
      const apiCallC = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID6}/t3`);
      const apiCallD = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID6}/t4`);
      const apiCallE = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID6}/t5`);
      const apiCallF = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID6}/t0`);
      const userA = await apiCallA.json();
      const userB = await apiCallB.json();
      const userC = await apiCallC.json();
      const userD = await apiCallD.json();
      const userE = await apiCallE.json();
      const userF = await apiCallF.json();
      
      const totaltimet1 = userA[0] != undefined? (userA[0].secondsplayed/60/90 > userA[0].matches ? userA[0].matches : userA[0].secondsplayed/60/90) : 0;
      console.log("El total time de la T1 es: "+totaltimet1);
      const totaltimet2 = userB[0] != undefined? userB[0].secondsplayed/60/90 > userB[0].matches ? userB[0].matches : userB[0].secondsplayed/60/90 : 0;
      console.log("El total time de la T2 es: "+totaltimet2);
      const totaltimet3 = userC[0] != undefined ? ( userC[0].secondsplayed/60/90 > userC[0].matches ? userC[0].matches : userC[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T3 es: "+totaltimet3);
      const totaltimet4 = userD[0] != undefined ? ( userD[0].secondsplayed/60/90 > userD[0].matches ? userD[0].matches : userD[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T4 es: "+ totaltimet4);
      const totaltimet5 = userE[0] != undefined ? ( userE[0].secondsplayed/60/90 > userE[0].matches ? userE[0].matches : userE[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T1 es: "+totaltimet5);
      const totaltimet0 = userF[0] != undefined ? ( userF[0].secondsplayed/60/90 > userF[0].matches ? userF[0].matches : userF[0].secondsplayed/60/90 ) : 0;
      const actualtime = Math.round(totaltimet1+totaltimet2+totaltimet3+totaltimet4+totaltimet5+totaltimet0);

      const apiCall = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID6}/${tID}`);
      const user = await apiCall.json();
      //call setName below to change the state 'name'
      // fetch inicial, por default agarra la playerID mia y la temporada es la de "all"
      setName6(user[0].name);
      setTeam6(user[0].team);

      setId6(steamid_to_64bit(playerID6));
      document.title = user[0].name;
      let PASS = Math.round(user[0].passescompleted/actualtime*5);
      let ASISS = Math.round(user[0].assists/actualtime*140);
      let TACKLE = Math.round(user[0].tacklescompleted/user[0].tackles*100*4.5);
      let POSS = Math.round(user[0].possession*8);
      let INTER = Math.round((user[0].interceptions/actualtime*2.5+user[0].tacklescompleted/actualtime)*2.05);
      let FIN = Math.round(user[0].goals/actualtime*70);
      let PRE = Math.round((user[0].shotsontarget/user[0].shots*100));
      let SAVEPERCENT = Math.round((user[0].savescaught/user[0].saves)*100);
      let ATASISS = Math.round(doSomethingWithInput(ASISS));
      let SAVE = Math.round((user[0].saves/actualtime*11));
      let SAVES = user[0].saves;
      if(SAVES==0){
        SAVES=1;
      }
      let CONCEDED = Math.abs(((user[0].goalsconceded-user[0].saves)/SAVES*100));
      
      console.log("ESTE ES EL PASS"+PASS+" ---- "+user[0].passescompleted/totaltime*5);

      const CP = (SAVE+SAVEPERCENT+CONCEDED)/3;
      setCP6(doSomethingWithInput((SAVE+SAVEPERCENT+CONCEDED)/3));
      const CC = Math.round((PASS+ASISS+POSS)/3)
      setCC6(doSomethingWithInput(((PASS+ASISS+POSS)/3)));
      const AF = (FIN+PRE+ATASISS)/3;
      setAF6(doSomethingWithInput(((FIN+PRE+ATASISS)/3)));
      const AD = INTER;
      setAD6(doSomethingWithInput(INTER));
      /*const val_def = (AD * 2.8 + AF / 3 + CC / 2.5)/3;
      const val_del = ( AF * 2.8 + AD / 3 + CC / 2.5)/3;
      const val_mca = ( CC * 2.8 + AD / 5.8 + AF * 0.5) / 3;
      const val_mcd = ( CC * 2.8 + AD * 0.5 + AF / 5.8) / 3;
      */
      const val_def = (AD * 2.3 + AF / 2.5 + CC / 2)/3;
      const val_del = ( AF * 2.3 + AD / 2.5 + CC / 2)/3;
      const val_mca = ( CC + AF ) / 2;
      const val_mcd = ( CC + AD ) / 2;
      let val_gk = CP;
      val_gk = val_gk || 0;
      setPos6(getPosition(val_del, val_def, val_mca, val_mcd, val_gk));
      setOvr6(Math.round(doSomethingWithInput(getOverall(val_del, val_def, val_mca, val_mcd, val_gk))));
    }

    const fetchUser = async () => {
      const apiCallA = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t1`);
      const apiCallB = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t2`);
      const apiCallC = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t3`);
      const apiCallD = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t4`);
      const apiCallE = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t5`);
      const apiCallF = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/t0`);
      const userA = await apiCallA.json();
      const userB = await apiCallB.json();
      const userC = await apiCallC.json();
      const userD = await apiCallD.json();
      const userE = await apiCallE.json();
      const userF = await apiCallF.json();
      
      const totaltimet1 = userA[0] != undefined? (userA[0].secondsplayed/60/90 > userA[0].matches ? userA[0].matches : userA[0].secondsplayed/60/90) : 0;
      console.log("El total time de la T1 es: "+totaltimet1);
      const totaltimet2 = userB[0] != undefined? userB[0].secondsplayed/60/90 > userB[0].matches ? userB[0].matches : userB[0].secondsplayed/60/90 : 0;
      console.log("El total time de la T2 es: "+totaltimet2);
      const totaltimet3 = userC[0] != undefined ? ( userC[0].secondsplayed/60/90 > userC[0].matches ? userC[0].matches : userC[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T3 es: "+totaltimet3);
      const totaltimet4 = userD[0] != undefined ? ( userD[0].secondsplayed/60/90 > userD[0].matches ? userD[0].matches : userD[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T4 es: "+ totaltimet4);
      const totaltimet5 = userE[0] != undefined ? ( userE[0].secondsplayed/60/90 > userE[0].matches ? userE[0].matches : userE[0].secondsplayed/60/90 ) : 0;
      console.log("El total time de la T1 es: "+totaltimet5);
      const totaltimet0 = userF[0] != undefined ? ( userF[0].secondsplayed/60/90 > userF[0].matches ? userF[0].matches : userF[0].secondsplayed/60/90 ) : 0;
      const actualtime = Math.round(totaltimet1+totaltimet2+totaltimet3+totaltimet4+totaltimet5+totaltimet0)

      const apiCall = await fetch (`https://stats.iosoccer-sa.bid/api/player/${playerID}/${tID}`);
      const user = await apiCall.json();
      //call setName below to change the state 'name'
      // fetch inicial, por default agarra la playerID mia y la temporada es la de "all"
      setName(user[0].name);
      setTeam(user[0].team);
      setMatches(user[0].matches);
      setGoals(user[0].goals);
      setAssists(user[0].assists);
      setShots(user[0].shots);
      setShotsontarget(user[0].shotsontarget);
      setPasses(user[0].passes);
      setPassescompleted(user[0].passescompleted);
      setInterceptions(user[0].interceptions);
      setFouls(user[0].fouls);
      setOffsides(user[0].offsides);
      setTackles(user[0].tackles);
      setTacklescompleted(user[0].tacklescompleted);
      setPossession(user[0].possession);
      setSaves(user[0].saves);
      setSavescaught(user[0].savescaught);
      setGoalsconceded(user[0].goalsconceded);
      setSecondsplayed(user[0].secondsplayed);

      setId(steamid_to_64bit(playerID));
      document.title = user[0].name;
      const PASS = Math.round(user[0].passescompleted/actualtime*5);
      const ASISS = Math.round(user[0].assists/actualtime*140);
      const TACKLE = Math.round(user[0].tacklescompleted/user[0].tackles*100*4.5);
      const POSS = Math.round(user[0].possession*8);
      const INTER = Math.round((user[0].interceptions/actualtime*2.5+user[0].tacklescompleted/actualtime)*2.05);
      const FIN = Math.round(user[0].goals/actualtime*70);
      const PRE = Math.round((user[0].shotsontarget/user[0].shots*100));
      const SAVEPERCENT = Math.round((user[0].savescaught/user[0].saves)*100);
      const ATASISS = Math.round(doSomethingWithInput(ASISS));
      const SAVE = Math.round((user[0].saves/actualtime*11));
      let SAVES = user[0].saves;
      if(SAVES==0){
        SAVES=1;
      }
      const CONCEDED = Math.abs(((user[0].goalsconceded-user[0].saves)/SAVES*100));

      console.log("ESTE ES EL PASS"+PASS+" ---- "+user[0].passescompleted/totaltime*5);
      setFinavg(Math.round(doSomethingWithInput(FIN)));
      setPassavg(Math.round(doSomethingWithInput(PASS)));
      setAssistavg(Math.round(doSomethingWithInput(ASISS)));
      setInteravg(Math.round(doSomethingWithInput(INTER)));
      setPosavg(Math.round(doSomethingWithInput(POSS*0.97)));
      setAttackassistavg(Math.round(doSomethingWithInput(ATASISS)));
      setPreavg(Math.round(doSomethingWithInput(PRE)));
      setSavesavg(Math.round(doSomethingWithInput(SAVE)));
      setSavespercentavg(Math.round(doSomethingWithInput(SAVEPERCENT)));
      setConcededavg(Math.round(doSomethingWithInput(CONCEDED)));

      const CP = (SAVE+SAVEPERCENT+CONCEDED)/3;
      setCP(doSomethingWithInput((SAVE+SAVEPERCENT+CONCEDED)/3));
      const CC = Math.round((PASS+ASISS+POSS)/3)
      setCC(doSomethingWithInput(((PASS+ASISS+POSS)/3)));
      const AF = (FIN+PRE+ATASISS)/3;
      setAF(doSomethingWithInput(((FIN+PRE+ATASISS)/3)));
      const AD = INTER;
      setAD(doSomethingWithInput(INTER));
      /*const val_def = (AD * 2.8 + AF / 3 + CC / 2.5)/3;
      const val_del = ( AF * 2.8 + AD / 3 + CC / 2.5)/3;
      const val_mca = ( CC * 2.8 + AD / 5.8 + AF * 0.5) / 3;
      const val_mcd = ( CC * 2.8 + AD * 0.5 + AF / 5.8) / 3;
      */
      const val_def = (AD * 2.3 + AF / 2.5 + CC / 2)/3;
      const val_del = ( AF * 2.3 + AD / 2.5 + CC / 2)/3;
      const val_mca = ( CC + AF ) / 2;
      const val_mcd = ( CC + AD ) / 2;
      let val_gk = CP;
      val_gk = val_gk || 0;
      setOvr(Math.round(doSomethingWithInput(getOverall(val_del, val_def, val_mca, val_mcd, val_gk))));
      console.log("Chupate una verga -> CF:"+val_del+" DEF: "+val_def+" MCA: "+val_mca+" MCD: "+val_mcd+" GK: "+val_gk)
      setPos(getPosition(val_del, val_def, val_mca, val_mcd, val_gk));
    }

    const fetchUser2 = async () => {
      const apiCall2 = await fetch (`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=EC93B358FBCA4A90D62433C974003873&steamids=${idd}`);
      const user2 = await apiCall2.json();
      //call setName below to change the state 'name'
      //fetch utilizado para determinar el ID64 del usuario y usarlo a la hora de identificar usuarios para fotos etc
      setAvatar(user2.response.players[0].avatarfull);
      console.log(user2.response.players[0].avatarfull);
      steam.resolve('https://steamcommunity.com/id/Casana').then(id => {
        //console.log(id); // 76561198146931523
        console.log("XD 3!");
    });

    steam.getUserSummary('76561198146931523').then(url => {
    setCount(url.avatar.large);
    /**
    PlayerSummary {
        avatar: {
            small: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8.jpg',
            medium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8_medium.jpg',
            large: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8_full.jpg'
        },
        steamID: '76561198146931523',
        url: 'http://steamcommunity.com/id/DimGG/',
        created: 1406393110,
        lastLogOff: 1517725233,
        nickname: 'Dim',
        primaryGroupID: '103582791457347196',
        personaState: 1,
        personaStateFlags: 0,
        commentPermission: 1,
        visibilityState: 3
    }
    */
    });
    }

    useEffect(() => {
      fetchUser();
      fetchUser2();
    }, [playerID])
    
    useEffect(() => {
      fetchUser();
      fetchUser2();
      fetchUser3();
    }, [tID])

    useEffect(() => {
      fetchUser3();
      fetchUser2();
    }, [playerID2])

    useEffect(() => {
      fetchUser4();
      fetchUser2();
    }, [playerID3])

    useEffect(() => {
      fetchUser5();
      fetchUser2();
    }, [playerID4])

    useEffect(() => {
      fetchUser6();
      fetchUser2();
    }, [playerID5])

    useEffect(() => {
      fetchUser7();
      fetchUser2();
    }, [playerID6])

    const data = [
      {
        data: {
          battery: 0.7,
          design: .8,
          useful: 0.9,
        },
        meta: { color: 'blue' }
      },
      {
        data: {
          battery: 0.6,
          design: .85,
          useful: 0.5,
        },
        meta: { color: 'red' }
      }
    ];
 
    const captions = {
      // columns
      battery: 'Poder Ofensivo',
      design: 'Aptitud Defensiva',
      useful: 'Participacion Juego',
    };
 

    //(`http://stats.iosoccer-sa.bid/api/player/${id}/all`)

    //<div class="stats-col-2">
    //{passescompleted}
    //<span class="player-card-stats-name"> SHT</span>
    //<br></br>
    //{passes}
    //<span class="player-card-stats-name"> STR</span>
    //<br></br>
    //{interceptions}
    //<span class="player-card-stats-name"> DEF</span>
    //</div>

    //<select
    //value={tID}
    //onChange={r => setTID(String(r.target.value))}
    //>
    //{torneos.torneos.map(torneo => (
    //  <option key={torneo.name} value={torneo.name}>
    //    {torneo.name}
    //  </option>
    //))}
   // </select>

   //{{backgroundImage: require(`../images/banners/${team.toString().toLowerCase()}.png`)}} backgroundSize: '50%'
   //`url(` + require(`../images/banners/${team.toString().toLowerCase()}.png`) + `)`
    // declaramos un contador y un ovrtotal para poner los promedios del overall
   
   
   
    /* <div className="stats-col-1">
                  {Math.trunc(AF)}
                  <span className="player-card-stats-name"> AP</span>
                  <br></br>
                  {Math.trunc(AD)}
                  <span className="player-card-stats-name"> AD</span>
                  <br></br>
                  {Math.trunc(CC)}
                  <span className="player-card-stats-name"> CC</span>
                </div>
                <div className="stats-col-2">
                  {Math.trunc(CP)}
                  <span className="player-card-stats-name"> CP</span>
                  <br></br>
                </div>
                <div className="stats-col-bg"></div>
              </div>
              <tr>
                          <td className="stat_tier_3 stat" style={{backgroundColor: tacklescompleted >= 15 ? '#02fec5': tacklescompleted >= 10 && tacklescompleted < 15 ? '#a8fe02' : tacklescompleted >= 5 && tacklescompleted < 10 ? '#fbb206' : 'red' }}>{Math.trunc(tacklescompleted)}</td>
                          <td>Entradas completadas</td>
              </tr>
              */

    return(
      <div>
        <div className="content-container">
          <div className="fw-container bg-dark"  style={{ backgroundImage: `url(` + require(`../images/banners/0.png`) + `)` , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div>
              <div className="container-large flex top-container">
                <div>
                  <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr >= 80 && ovr < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr >= 70 && ovr < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                    <div className="player-card-position">{pos}</div>
                    <div className="player-card-ovr">{ovr}</div>
                    <div className="player-card-name">{name}</div>
                    <img className="player-card-club-featured" src={require(`../images/clubs/${team.toString().toLowerCase()}.png`)}></img>
                    <img className="player-card-image-featured" src={require(`../images/cartas/${id}.png`)}></img>
                  </div>
                  <div>
                        <select className="custom-select-player1"
                        value={playerID}
                        onChange={e => { setTID(String("all")) ; setPlayerID(String(e.target.value)); } }
                        >
                        {players.players.map(player => (
                          <option key={player.steam} value={player.steam}>
                            {player.name}
                          </option>
                        ))}
                        </select>
                  </div>
                </div>
                <div>
                  <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr2 >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr2 >= 80 && ovr2 < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr2 >= 70 && ovr2 < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                    <div className="player-card-position">{pos2}</div>
                    <div className="player-card-ovr">{ovr2}</div>
                    <div className="player-card-name">{name2}</div>
                    <img className="player-card-club-featured" src={require(`../images/clubs/${team2.toString().toLowerCase()}.png`)}></img>
                    <img className="player-card-image-featured" src={require(`../images/cartas/${id2}.png`)}></img>
                  </div>
                  <div>
                        <select className="custom-select-player1"
                        value={playerID2}
                        onChange={e => { setTID(String("all")) ; setPlayerID2(String(e.target.value)); } }
                        >
                        {players.players.map(player => (
                          <option key={player.steam} value={player.steam}>
                            {player.name}
                          </option>
                        ))}
                        </select>
                  </div>
                </div>
                <div>
                  <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr3 >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr3 >= 80 && ovr3 < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr3 >= 70 && ovr3 < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                    <div className="player-card-position">{pos3}</div>
                    <div className="player-card-ovr">{ovr3}</div>
                    <div className="player-card-name">{name3}</div>
                    <img className="player-card-club-featured" src={require(`../images/clubs/${team3.toString().toLowerCase()}.png`)}></img>
                    <img className="player-card-image-featured" src={require(`../images/cartas/${id3}.png`)}></img>
                  </div>
                  <div>
                        <select className="custom-select-player1"
                        value={playerID3}
                        onChange={e => { setTID(String("all")) ; setPlayerID3(String(e.target.value)); } }
                        >
                        {players.players.map(player => (
                          <option key={player.steam} value={player.steam}>
                            {player.name}
                          </option>
                        ))}
                        </select>
                  </div>
                </div>
                <div>
                  <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr4 >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr4 >= 80 && ovr4 < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr4 >= 70 && ovr4 < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                    <div className="player-card-position">{pos4}</div>
                    <div className="player-card-ovr">{ovr4}</div>
                    <div className="player-card-name">{name4}</div>
                    <img className="player-card-club-featured" src={require(`../images/clubs/${team4.toString().toLowerCase()}.png`)}></img>
                    <img className="player-card-image-featured" src={require(`../images/cartas/${id4}.png`)}></img>
                  </div>
                  <div>
                        <select className="custom-select-player1"
                        value={playerID4}
                        onChange={e => { setTID(String("all")) ; setPlayerID4(String(e.target.value)); } }
                        >
                        {players.players.map(player => (
                          <option key={player.steam} value={player.steam}>
                            {player.name}
                          </option>
                        ))}
                        </select>
                  </div>
                </div>
                <div>
                  <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr5 >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr5 >= 80 && ovr5 < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr5 >= 70 && ovr5 < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                    <div className="player-card-position">{pos5}</div>
                    <div className="player-card-ovr">{ovr5}</div>
                    <div className="player-card-name">{name5}</div>
                    <img className="player-card-club-featured" src={require(`../images/clubs/${team5.toString().toLowerCase()}.png`)}></img>
                    <img className="player-card-image-featured" src={require(`../images/cartas/${id5}.png`)}></img>
                  </div>
                  <div>
                        <select className="custom-select-player1"
                        value={playerID5}
                        onChange={e => { setTID(String("all")) ; setPlayerID5(String(e.target.value)); } }
                        >
                        {players.players.map(player => (
                          <option key={player.steam} value={player.steam}>
                            {player.name}
                          </option>
                        ))}
                        </select>
                  </div>
                </div>
                <div>
                  <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr6 >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr6 >= 80 && ovr6 < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr6 >= 70 && ovr6 < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                    <div className="player-card-position">{pos6}</div>
                    <div className="player-card-ovr">{ovr6}</div>
                    <div className="player-card-name">{name6}</div>
                    <img className="player-card-club-featured" src={require(`../images/clubs/${team6.toString().toLowerCase()}.png`)}></img>
                    <img className="player-card-image-featured" src={require(`../images/cartas/${id6}.png`)}></img>
                  </div>
                  <div>
                        <select className="custom-select-player1"
                        value={playerID6}
                        onChange={e => { setTID(String("all")) ; setPlayerID6(String(e.target.value)); } }
                        >
                        {players.players.map(player => (
                          <option key={player.steam} value={player.steam}>
                            {player.name}
                          </option>
                        ))}
                        </select>
                  </div>
                </div>
                <div>
                        <select className="custom-select-player1"
                        value={formationID}
                        onChange={e => { setFormationID(String("1")) ; setFormationID(String(e.target.value)); } }
                        >
                        {formations.formations.map(formations => (
                          <option key={formations.id} value={formations.id}>
                            {formations.name}
                          </option>
                        ))}
                        </select>
                  </div>
            </div>
            </div>
          </div>
          <div className="main-stats-cards-container container-large flex flex-expand">
            <div className="player-main-column player-info-column">
              <div className="hexagon-positions-container">
                <div className="hexagon-container">
                <RadarChart
                  captions={{
                  // columns
                    battery: 'AP',
                    design: 'AD',
                    poderio: 'CP',
                    useful: 'CC',
                    
                  }}
                  data={[
                  // data
                    {
                      data: {
                        battery: AF/100,
                        design: AD/100,
                        useful: CC/100,
                        poderio: CP/100,
                      },
                      meta: { color: '#58FCEC' }
                    },
                    {
                      data: {
                        battery: AF2/100,
                        design: AD2/100,
                        useful: CC2/100,
                        poderio: CP2/100,
                      },
                      meta: { color: '#ffff00' }
                    },
                    {
                      data: {
                        battery: AF3/100,
                        design: AD3/100,
                        useful: CC3/100,
                        poderio: CP3/100,
                      },
                      meta: { color: '#ff0000' }
                    },
                    {
                      data: {
                        battery: AF4/100,
                        design: AD4/100,
                        useful: CC4/100,
                        poderio: CP4/100,
                      },
                      meta: { color: '#cc66ff' }
                    },
                    {
                      data: {
                        battery: AF5/100,
                        design: AD5/100,
                        useful: CC5/100,
                        poderio: CP5/100,
                      },
                      meta: { color: '#99ff99' }
                    },
                    {
                      data: {
                        battery: AF3/100,
                        design: AD3/100,
                        useful: CC3/100,
                        poderio: CP3/100,
                      },
                      meta: { color: '#ffcc99' }
                    },
                  ]}
                  size={200}
                />
                </div>
                {formationID == 1 ? (
                  <div className="player-positions-new">
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr6 >= 85 ? '#ef1e1e': ovr6 >= 75 && ovr6 < 85 ? '#f09090' : 'white' }}> 
                      <span className="pos">{pos6}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr5)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item" style={{backgroundColor: ovr5 >= 85 ? '#88c900': ovr5 >= 75 && ovr5 < 85 ? '#b6c98d' : 'white' }}> 
                      <span className="pos">{pos5}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr5)}</span>
                    </div>
                    <div className="player-positions-item" style={{backgroundColor: ovr4 >= 85 ? '#88c900': ovr4 >= 75 && ovr4 < 85 ? '#b6c98d' : 'white' }}> 
                      <span className="pos">{pos4}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr4)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr3 >= 85 ? '#00abd2': ovr3 >= 75 && ovr3 < 85 ? '#92c6d1' : 'white' }}> 
                      <span className="pos">{pos3}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr3)}</span>
                    </div>
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr2 >= 85 ? '#00abd2': ovr2 >= 75 && ovr2 < 85 ? '#92c6d1' : 'white' }}> 
                      <span className="pos">{pos2}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr2)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr >= 85 ? '#feb907': ovr >= 75 && ovr < 85 ? '#fed97b' : 'white' }}> 
                      <span className="pos">{pos}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr)}</span>
                    </div>
                  </div>
                </div> ) 
                : formationID == 2 ? (
                  <div className="player-positions-new">
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr6 >= 85 ? '#ef1e1e': ovr6 >= 75 && ovr6 < 85 ? '#f09090' : 'white' }}> 
                      <span className="pos">{pos6}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr5)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item" style={{backgroundColor: ovr4 >= 85 ? '#88c900': ovr4 >= 75 && ovr4 < 85 ? '#b6c98d' : 'white' }}> 
                      <span className="pos">{pos4}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr4)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr3 >= 85 ? '#00abd2': ovr3 >= 75 && ovr3 < 85 ? '#92c6d1' : 'white' }}> 
                      <span className="pos">{pos3}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr3)}</span>
                    </div>
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr2 >= 85 ? '#00abd2': ovr2 >= 75 && ovr2 < 85 ? '#92c6d1' : 'white' }}> 
                      <span className="pos">{pos2}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr2)}</span>
                    </div>
                    <div className="player-positions-item" style={{backgroundColor: ovr5 >= 85 ? '#88c900': ovr5 >= 75 && ovr5 < 85 ? '#b6c98d' : 'white' }}> 
                      <span className="pos">{pos5}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr5)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr >= 85 ? '#feb907': ovr >= 75 && ovr < 85 ? '#fed97b' : 'white' }}> 
                      <span className="pos">{pos}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr)}</span>
                    </div>
                  </div>
                </div>
                ) : (
                  <div className="player-positions-new">
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr6 >= 85 ? '#ef1e1e': ovr6 >= 75 && ovr6 < 85 ? '#f09090' : 'white' }}> 
                      <span className="pos">{pos6}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr5)}</span>
                    </div>
                    <div className="player-positions-item" style={{backgroundColor: ovr5 >= 85 ? '#88c900': ovr5 >= 75 && ovr5 < 85 ? '#b6c98d' : 'white' }}> 
                      <span className="pos">{pos5}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr5)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item" style={{backgroundColor: ovr4 >= 85 ? '#88c900': ovr4 >= 75 && ovr4 < 85 ? '#b6c98d' : 'white' }}> 
                      <span className="pos">{pos4}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr4)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr3 >= 85 ? '#00abd2': ovr3 >= 75 && ovr3 < 85 ? '#92c6d1' : 'white' }}> 
                      <span className="pos">{pos3}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr3)}</span>
                    </div>
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr2 >= 85 ? '#00abd2': ovr2 >= 75 && ovr2 < 85 ? '#92c6d1' : 'white' }}> 
                      <span className="pos">{pos2}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr2)}</span>
                    </div>
                  </div>
                  <div className="player-positions-row">
                    <div className="player-positions-item fw-2" style={{backgroundColor: ovr >= 85 ? '#feb907': ovr >= 75 && ovr < 85 ? '#fed97b' : 'white' }}> 
                      <span className="pos">{pos}</span>
                      <span className="stat ovr_12 stat_tier_3" style={{backgroundColor: 'rgba(250, 250, 250, 0.2)'}}>{Math.trunc(ovr)}</span>
                    </div>
                  </div>
                  </div>
                )}
              </div>
              <table className="player-info">
                <tbody>
                  <tr>
                    <td>Arquero
                    </td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>Defensor</td>
                    <td>{name2}</td>
                  </tr>
                  <tr>
                    <td>{formationID == 1 ? 'Defensor' : 'Defensor'}</td>
                    <td>{name3}</td>
                  </tr>
                  <tr>
                    <td>{formationID == 2 ? 'Defensor' : formationID == 3 ? 'Delantero' : formationID == 4 ? 'Delantero' : 'Mediocampo'}</td>
                    <td>{name5}</td>
                  </tr>
                  <tr>
                    <td>Mediocampo</td>
                    <td>{name4}</td>
                  </tr>
                  <tr>
                    <td>Delantero</td>
                    <td>{name6}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="responsive">
              <div className="flex flex-column formation-manager__field" style={{flexGrow: 2}}>
                <div className="squad-background"></div>
                <div className="squad-slot posgk" style={{left: ((width/height)+430), top: 600}}>
                  <div className="squad-drop">
                    <div className="squad-slot2 squad-slot2-interactive">
                      <div className="squad-slot-card">
                        <div className="squad-card">
                          <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr >= 80 && ovr < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr >= 70 && ovr < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                          <div className="player-card-position">{pos}</div>
                          <div className="player-card-ovr">{ovr}</div>
                          <div className="player-card-name">{name}</div>
                          <img className="player-card-club-featured" src={require(`../images/clubs/${team.toString().toLowerCase()}.png`)}></img>
                          <img className="player-card-image-featured" src={require(`../images/cartas/${id}.png`)}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="squad-slot poscb1" style={{left: ((width/height)+270), top: 400}}>
                  <div className="squad-drop">
                    <div className="squad-slot2 squad-slot2-interactive">
                      <div className="squad-slot-card">
                        <div className="squad-card">
                          <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr2 >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr2 >= 80 && ovr2 < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr2 >= 70 && ovr2 < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                          <div className="player-card-position">{pos2}</div>
                          <div className="player-card-ovr">{ovr2}</div>
                          <div className="player-card-name">{name2}</div>
                          <img className="player-card-club-featured" src={require(`../images/clubs/${team2.toString().toLowerCase()}.png`)}></img>
                          <img className="player-card-image-featured" src={require(`../images/cartas/${id2}.png`)}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="squad-slot poscb2" style={{left: formationID == 1 ? ((width/height)+590) : formationID == 2 ? ((width/height)+430) : ((width/height)+590), top: 400}}>
                  <div className="squad-drop">
                    <div className="squad-slot2 squad-slot2-interactive">
                      <div className="squad-slot-card">
                        <div className="squad-card">
                          <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr3 >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr3 >= 80 && ovr3 < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr3 >= 70 && ovr3 < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                          <div className="player-card-position">{pos3}</div>
                          <div className="player-card-ovr">{ovr3}</div>
                          <div className="player-card-name">{name3}</div>
                          <img className="player-card-club-featured" src={require(`../images/clubs/${team3.toString().toLowerCase()}.png`)}></img>
                          <img className="player-card-image-featured" src={require(`../images/cartas/${id3}.png`)}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="squad-slot posmca" style={{left: formationID == 1 ? ((width/height)+270) : formationID == 2 ? ((width/height)+430) : ((width/height)+430), top: 190}}>
                  <div className="squad-drop">
                    <div className="squad-slot2 squad-slot2-interactive">
                      <div className="squad-slot-card">
                        <div className="squad-card">
                          <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr4 >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr4 >= 80 && ovr4 < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr4 >= 70 && ovr4 < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                          <div className="player-card-position">{pos4}</div>
                          <div className="player-card-ovr">{ovr4}</div>
                          <div className="player-card-name">{name4}</div>
                          <img className="player-card-club-featured" src={require(`../images/clubs/${team4.toString().toLowerCase()}.png`)}></img>
                          <img className="player-card-image-featured" src={require(`../images/cartas/${id4}.png`)}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="squad-slot posmcd" style={{left: formationID == 1 ? ((width/height)+590) : formationID == 2 ? ((width/height)+590) : ((width/height)+590), top: formationID == 1 ? 190 : formationID == 2 ? 400 : 0}}>
                  <div className="squad-drop">
                    <div className="squad-slot2 squad-slot2-interactive">
                      <div className="squad-slot-card">
                        <div className="squad-card">
                          <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr5 >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr5 >= 80 && ovr5 < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr5 >= 70 && ovr5 < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                          <div className="player-card-position">{pos5}</div>
                          <div className="player-card-ovr">{ovr5}</div>
                          <div className="player-card-name">{name5}</div>
                          <img className="player-card-club-featured" src={require(`../images/clubs/${team5.toString().toLowerCase()}.png`)}></img>
                          <img className="player-card-image-featured" src={require(`../images/cartas/${id5}.png`)}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="squad-slot poscf" style={{left: formationID == 1 ? ((width/height)+430) : formationID == 2 ? ((width/height)+430) : ((width/height)+270), top: formationID == 1 ? 0 : formationID == 2 ? 0 : 0}}>
                  <div className="squad-drop">
                    <div className="squad-slot2 squad-slot2-interactive">
                      <div className="squad-slot-card">
                        <div className="squad-card">
                          <div className="player-card player-card-shadow player-card-large bg-image2" style={{ backgroundImage: ovr6 >= 90 ? `url(` + require(`../images/bg/0.png`) + `)`: ovr6 >= 80 && ovr6 < 90 ? `url(` + require(`../images/bg/03.png`) + `)` : ovr6 >= 70 && ovr6 < 80 ? `url(` + require(`../images/bg/05.png`) + `)` : `url(` + require(`../images/bg/05.png`) + `)`}}>
                          <div className="player-card-position">{pos6}</div>
                          <div className="player-card-ovr">{ovr6}</div>
                          <div className="player-card-name">{name6}</div>
                          <img className="player-card-club-featured" src={require(`../images/clubs/${team6.toString().toLowerCase()}.png`)}></img>
                          <img className="player-card-image-featured" src={require(`../images/cartas/${id6}.png`)}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
        <>
        
        </>
        
      </div>
        
    </div>
    )

}

export default SquadBuilder