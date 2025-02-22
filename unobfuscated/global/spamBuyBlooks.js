/**
* @license StewartPrivateLicense-2.0.0
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

/* Update Checker start */
(async () => { /* This is to prevent "identifier i is already declared errors" */
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host : "play.blooket.com") + "/api/games?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/useAnyBlook.js")?.answers?.[0]}`)).then(async x => {
        if (x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            let i = document.createElement('iframe');
            document.body.append(i);
            window.alert = i.contentWindow.alert.bind(window);
            window.prompt = i.contentWindow.prompt.bind(window);
            window.confirm = i.contentWindow.confirm.bind(window);
            i.remove();
            var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
            
            axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { name, tokens } }) => {
                let prices = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find(x => x?.exports?.a?.Safari).exports.a || {
                    Medieval: 15,
                    Breakfast: 15,
                    Wonderland: 15,
                    Space: 20,
                    Bot: 20,
                    Aquatic: 20,
                    Safari: 20,
                    Dino: 25,
                    "Ice Monster": 25
                };;
                let box = prompt("Which box do you want to open? (ex: \"Ice Monster\")").split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
                if (!Object.keys(prices).map(x => x.toLowerCase()).includes(box.toLowerCase())) return alert("I couldn't find that box!");
            
                let amount = Math.min(Math.floor(tokens / Object.entries(prices).find(x => x[0].toLowerCase() == box.toLowerCase())[1]), parseInt(`0${prompt("How many boxes do you want to open?")}`));
                if (amount == 0) return alert("You do not have enough tokens!");
            
                let alertBlooks = confirm("Would you like to alert blooks upon unlocking?");
                let blooks = {};
                let now = Date.now();
                let error = false;
            
                for (let i = 0; i < amount; i++) {
                    await axios.put("https://dashboard.blooket.com/api/users/unlockblook", { name, box }).then(({ data: { unlockedBlook, tokens, isNewBlook } }) => {
                        blooks[unlockedBlook] ||= 0;
                        blooks[unlockedBlook]++;
            
                        let before = Date.now();
            
                        if (alertBlooks) alert(`${unlockedBlook} (${i + 1}/${amount}) ${isNewBlook ? "NEW! " : ''}${tokens} tokens left`);
            
                        now += Date.now() - before;
                    }).catch(e => error = true);
                    if (error) break;
                }
                alert(`(${Date.now() - now}ms) Results:\n${Object.entries(blooks).map(([blook, amount]) => `    ${blook} ${amount}`).join(`\n`)}`);
            }).catch(() => alert('There was an error user data!'));
        }
    });
})();