
                let Discord;
                let Database;
                if(typeof window !== "undefined"){
                    Discord = DiscordJS;
                    Database = EasyDatabase;
                } else {
                    Discord = require("discord.js");
                    Database = require("easy-json-database");
                }
                const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
                const s4d = {
                    Discord,
                    client: null,
                    tokenInvalid: false,
                    reply: null,
                    joiningMember: null,
                    database: new Database("./db.json"),
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    fetchAllMembers: true
                });
                s4d.client.on('raw', async (packet) => {
                    if(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)){
                        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);
                        if(!guild) return;
                        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});
                        if(!member) return;
                        const channel = s4d.client.channels.cache.get(packet.d.channel_id);
                        if(!channel) return;
                        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});
                        if(!message) return;
                        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);
                    }
                });
                var arguments2, command;


s4d.client.login('You though haha').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('message', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == '!say') {
    s4dmessage.channel.send(String('Hello! I am in beta! More coming soon!'));
    s4dmessage.channel.send(String((arguments2.join(' '))));
  }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!ping') {
        s4dmessage.channel.send(String('How dare you ping the server! Pepe is now very sad :worried:'));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'im gay') {
        (s4dmessage.member).roles.add((Array.prototype.concat.apply([], s4d.client.guilds.cache.array().map((g) => g.roles.cache.array())).find((role) => role.name === 'gay')));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((rEmoji) == '✅') {
        (rMember).roles.add((Array.prototype.concat.apply([], s4d.client.guilds.cache.array().map((g) => g.roles.cache.array())).find((role) => role.name === '✅Verified✅')));
    }

});

var list;

function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}


s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!joke') {
        s4dmessage.channel.send((listsGetRandomItem(['Knock! Knock! Who\'s there? Candice. Candice who? Candice door open, or am I stuck out here?','Why do ghosts love elevators? Because it lifts their spirits.',	 'Knock! Knock! Who\'s there? Says. Says who? Says me, that\'s who!', 'Knock! Knock! Who\'s there? Voodoo. Voodoo who? Voodoo you think you are, asking all these questions?', 'To the guy who invented zero, thanks for nothing.', 'Why is Peter Pan always flying? Because he Neverlands.', 'Velcro… What a rip-off.', 'Every night at 11:11, I make a wish that someone will come fix my broken clock.', 'Where did you learn to make ice cream? Sunday school.', 'Atheism is a non-prophet organisation.', 'A man tried to sell me a coffin today. I told him that\'s the last thing I need.', 'What did the drummer call his two twin daughters? Anna one, Anna two.', 'What is Forrest Gump\'s computer password?1forrest1', 'What\'s the best way to carve wood? Whittle by whittle.', 'How many bugs do you need to rent out an apartment? Tenants.', 'What\'s green, fuzzy, and would hurt if it fell on you out of a tree? A pool table.', 'Have you heard of the band 923 Megabytes? Probably not, they haven\'t had a gig yet.', 'Why can\'t you hear a Pterodactyl go to the bathroom? Because the pee is silent.', 'What did the janitor say when he jumped out of the closet? "Supplies!"', 'If you\'re American when you go in the bathroom and American when you come out, what are you in the bathroom? European!', 'I watched hockey before it was cool. They were basically swimming.', 'What did one dish say to the other? Dinner is on me!', 'I still remember the last thing my grandfather said before kicking the bucket: "Hey, you want to see how far I can kick this bucket?"', 'I\'m thinking about removing my spine. I feel like it\'s only holding me back.'], false)));
    }

});

s4d;

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '?modmail') {
        s4dmessage.delete();
        (s4dmessage.member).send(String((['Hey ', s4dmessage.member, 'You now have been connected with ', '**', s4dmessage.guild, '**', '\'s Mods / Admins', '\n', 'to contact them, send your query anywhere in ', '**', s4dmessage.guild, '** server but make sure that it is in this format - [ **?mod-*your query*** ] **for example - "?mod-I had a suggestion....."**', '\n', '**[Don\'t worry, your query will be immediately deleted :wink: :wink: :wink: ]**', '\n', '\n', 'And if needed the Mods / Admins will contact you using my DM. [you will know it :wink: ]'].join(''))));
        await delay(Number(2) * 1000);
        s4d.database.set(String((String((s4dmessage.member).user.id) + String(Modmail))), '0');
    }

});


s4d.client.on('message', async (s4dmessage) => {
  if (((s4dmessage.content) || '').startsWith('!nick' || '')) {
    argument = (s4dmessage.content).split(' ');
    NICK = argument[1];
    (s4dmessage.member).setNickname(NICK);
  }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!youtube') {
        s4dmessage.channel.send(String('http://bit.ly/Yopro20_YT'));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!tip') {
        s4dmessage.channel.send((listsGetRandomItem(['Keep being active!', 'Invite people!', 'Invite even MORE PEOPLE'], false)));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!support') {
        s4dmessage.channel.send(String('https://discord.gg/wK5PYFnnvB (this link NEVER EXPIRE)'));
    }

});

function colourRgb(r, g, b) {
    r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
    g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
    b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
    r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
    g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
    b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
    return '#' + r + g + b;
}


s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!help') {
        s4dmessage.channel.send({
            embed: {
                title: 'Main Commands',
                color: (colourRgb(19, 106, 55)),
                image: {
                    url: 'https://i.imgur.com/NhGEwCx.png'
                },
                description: (['!help fun', '\n', '!help useful', '\n', '!help admin (ONLY PEOPLE WITH ADMIN PERMS WILL ACCESS IT)'].join(''))
            }
        });
    }

});

s4d.client.on('ready', async () => {

    while (s4d.client && s4d.client.token) {
        await delay(50);
        s4d.client.user.setActivity(String('!help'));
        await delay(Number(5) * 1000);
        s4d.client.user.setActivity(String('I HAVE A WEBSITE discordpepebot.tk'));
        await delay(Number(5) * 1000);
        s4d.client.user.setActivity(String('Soon on top.gg'));
        await delay(Number(5) * 1000);
        s4d.client.user.setActivity(String('Copy this and make it your status. Don\'t mention it to me or anyone, This status will spread silently'));
        await delay(Number(5) * 1000);
        s4d.client.user.setActivity(String('Minecraft is best game'));
        await delay(Number(5) * 1000);

        console.log('ran')
    }

});


s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!web') {
        s4dmessage.channel.send(String('Here is my website! (Still in works!) https://www.discordpepebot.tk/home'));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!meme') {
        s4dmessage.channel.send((listsGetRandomItem(['https://cdn.discordapp.com/attachments/691635398081904680/837965861792907314/57uj86.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837984088988057630/20210428_160911.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837987494632226846/image2.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837992441558335528/Mematic_20210501_130045.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837996475711225886/there-wasa-spider-in-my-bedroom-not-anymore-memes-com-17956608.png', 'https://cdn.discordapp.com/attachments/691635398081904680/837999347290865674/57uqob.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/838003263571099678/image0.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/838006434700329031/a15.png', 'https://cdn.discordapp.com/attachments/691635398081904680/838007237808226314/image_1.jpeg', 'https://i.redd.it/o1phw5q0daw61.png', 'https://i.redd.it/7vd47qvoyew61.jpg', 'https://i.redd.it/wplvvsbckaw61.jpg', 'https://i.redd.it/pzd4q5v06ew61.jpg', 'https://i.redd.it/3itwop8zybw61.jpg', 'https://i.redd.it/yk6tnfowsaw61.jpg', 'https://i.redd.it/03xnle3smaw61.jpg', 'https://i.redd.it/17nr3bviwbw61.jpg', 'https://cdn.discordapp.com/attachments/696004845576126515/837719370049912892/wFGeyJdqPgJVAAAAABJRU5ErkJggg.png', 'https://cdn.discordapp.com/attachments/696004845576126515/837876562006769684/unknown.png', 'https://cdn.discordapp.com/attachments/696004845576126515/837929798281986098/wdSH6SkkSw0IAAAAABJRU5ErkJggg.png', 'https://cdn.discordapp.com/attachments/696004845576126515/837932953342050354/BW1OjASRGtYAAAAASUVORK5CYII.png', 'https://media.discordapp.net/attachments/691635398081904680/837880182307684372/image0.jpg?width=644&height=465', 'https://cdn.discordapp.com/attachments/691635398081904680/837887091945373747/image0.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837889612918554655/57tzvn.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837895566020706334/Mematic_20210501_111055.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837910736687988736/unknown.png', 'https://cdn.discordapp.com/attachments/691635398081904680/837930757308678184/CBy9IkimumcAAAAASUVORK5CYII.png', 'https://cdn.discordapp.com/attachments/691635398081904680/837938934624681994/unknown.png', 'https://cdn.discordapp.com/attachments/691635398081904680/837953883812790342/ghostbusters.png', 'https://cdn.discordapp.com/attachments/691635398081904680/837762813824204840/Screenshot_20210429_191551.jpg', 'https://i.redd.it/wk20xnfg96w61.jpg', 'https://i.redd.it/nucvv6jly9w61.jpg', 'https://i.redd.it/g0mci06l18w61.gif', 'https://i.redd.it/5no291e8t9w61.jpg', 'https://i.redd.it/1kqdzphwq5w61.jpg', 'https://i.redd.it/6lisdukwp7w61.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837844369389256714/image0.jpg', 'https://cdn.discordapp.com/attachments/696004845576126515/836381110665609266/578nym.png', 'https://cdn.discordapp.com/attachments/696004845576126515/836849787033747476/zombomeme28042021142108.jpg', 'https://i.redd.it/uuvc5id0s8w61.png', 'https://i.redd.it/x2hgu10x19w61.gif', 'https://cdn.discordapp.com/attachments/691635398081904680/837763045748768889/image0.png', 'https://cdn.discordapp.com/attachments/691635398081904680/837775410141593620/I_Said_We_Sad_Today_29042021131844.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837785948959277077/Screenshot_20210430-132131_Google.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837787275885936720/Mematic_20210430_145522.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837789437937188874/57srd0.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837802837681242122/20210426_090215.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837824911996616704/57r3pq.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837831559095910461/Mematic_20210430_145527.jpg', 'https://cdn.discordapp.com/attachments/691635398081904680/837833182165336064/why_exactly.png', 'https://cdn.discordapp.com/attachments/691635398081904680/837837603767320576/image0.jpg', 'https://cdn.discordapp.com/attachments/696004845576126515/834663499808243772/image0.png', 'https://cdn.discordapp.com/attachments/696004845576126515/834923635596722206/PSX_20210422_174601.jpg', 'https://cdn.discordapp.com/attachments/696004845576126515/836273730614329414/7f2i6gAAAABJRU5ErkJggg.png', 'https://cdn.discordapp.com/attachments/696004845576126515/836292651618795580/56sz05.png', 'https://cdn.discordapp.com/attachments/696004845576126515/836307155048726538/Untitled112.jpg', 'https://cdn.discordapp.com/attachments/696004845576126515/836317744336994345/19F6EE00-0812-41BE-8947-13BCF271F521.jpeg', 'https://cdn.discordapp.com/attachments/696004845576126515/836363974744211527/20210425_024930.jpg', 'https://cdn.discordapp.com/attachments/696004845576126515/836627695554134067/57blja.png', 'https://cdn.discordapp.com/attachments/696004845576126515/836706027893555221/37CD6B0B-A722-4D15-8ABD-9D4C0E582DA7.jpeg', 'https://cdn.discordapp.com/attachments/696004845576126515/836767449093374012/57dzuh.png', 'https://cdn.discordapp.com/attachments/696004845576126515/836833077937831976/image0.jpg', 'https://cdn.discordapp.com/attachments/696004845576126515/836857283479863296/ZomboMeme_28042021093205.jpg'], false)));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!gay') {
        s4dmessage.channel.send((listsGetRandomItem(['You are 96% gay', 'You are 83% gay', 'You are 56% gay', 'You are 15% gay', 'You are 50% gay', 'You are 3% gay', 'You are 92% gay', 'You are 7% gay', 'You are 81% gay', 'You are 85% gay', 'You are 20% gay', 'You are 14% gay', 'You are 65% gay', 'You are 94% gay', 'You are 6% gay', 'You are 42% gay', 'You are 34% gay', 'You are 24% gay', 'You are 2% gay', 'You are 76% gay', 'You are 100% HOLY MOLY :monkaMega: ', 'You are 99% gay wtf', 'You are 9% gay', 'You are 77% gay', 'You are 80% gay', 'You are 38% gay', 'You are 68% gay (so close)', 'You are 54% gay', 'You are 36% gay', 'You are 11% gay', 'You are 69% gay (nice)', 'You are 0% gay WOW'], false)));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!invite') {
        s4dmessage.channel.send(String('Invite me to futher servers! http://bit.ly/Pepe_Bot'));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!uselessweb') {
        s4dmessage.channel.send((listsGetRandomItem(['http://www.ismycomputeron.com/', 'https://crouton.net/', 'http://burymewithmymoney.com/', 'http://www.republiquedesmangues.fr/', 'http://endless.horse/', 'http://www.patience-is-a-virtue.org/', 'http://randomcolour.com/', 'http://www.watermelonduck.com/', 'http://onemillionlols.com/', 'http://hasthelargehadroncolliderdestroyedtheworldyet.com/', 'http://ninjaflex.com/', 'http://www.omfgdogs.com/', 'http://sometimesredsometimesblue.com/', 'https://nullingthevoid.com/', 'https://imaninja.com/', 'http://www.clicktoremove.com/', 'https://chickenonaraft.com/', 'http://salmonofcapistrano.com/', 'https://hectorsalamanca.com/', 'https://heeeeeeeey.com/', 'https://iamawesome.com/', 'https://isitchristmas.com/'], false)));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!owo') {
        s4dmessage.channel.send(String('OwO'));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!comic') {
        s4dmessage.channel.send((listsGetRandomItem(['https://i.redd.it/jieler54m3w61.png', 'https://i.redd.it/hyb41p9gcwv61.png', 'https://i.imgur.com/X7t3c3n.jpg', 'https://i.redd.it/hkzqrn8ancv61.png', 'https://i.redd.it/5ubmfykd9lv61.jpg', 'https://i.redd.it/1hzuizx0i8v61.jpg', 'https://i.redd.it/go969bjzn7w61.png', 'https://i.redd.it/r22kxwus2sv61.png', 'https://images-ext-2.discordapp.net/external/UzpK4clFrkv7YcGVggc1HAt0ELi6v6uRNC8OiEXYJ-s/https/i.redd.it/at3j1kkvp0w61.jpg?width=465&height=465', 'https://i.redd.it/qp9jbqs8gpv61.png', 'https://i.redd.it/jiwx257ejtv61.jpg', 'https://i.redd.it/d9dec67z5zv61.png', 'https://i.redd.it/qecwbdicmdw61.jpg', 'https://i.redd.it/u7r2ujqitbv61.png', 'https://i.redd.it/dqjqqb3t1kv61.png', 'https://i.redd.it/d62ope7qe7v61.jpg', 'https://i.redd.it/cwkx4g02dcv61.jpg', 'https://i.redd.it/xu8vww77vdw61.png', 'https://images-ext-2.discordapp.net/external/3vosqE4xW2m86D-pLqQbvUjqN2WTpNzaofMUmOD-ifE/https/i.imgur.com/gnz7wBa.png?width=465&height=465'], false)));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!pun') {
        s4dmessage.channel.send((listsGetRandomItem(['What do I look like? A JOKE MACHINE!?', 'What is the leading cause of dry skin? Towels', 'I applied to be a doorman but didn\'t get the job due to lack of experience. That surprised me, I thought it was an entry level position.', 'What\'s the best thing about elevator jokes? They work on so many levels.', 'Have you ever heard of a music group called Cellophane? They mostly wrap.', 'How do you know if there’s an elephant under your bed? Your head hits the ceiling!', ' Where do young cows eat lunch? In the calf-ateria.', 'Which is the fastest growing city in the world? Dublin', 'Just watched a documentary about beavers… It was the best damn program I’ve ever seen.', 'In the news a courtroom artist was arrested today, I\'m not surprised, he always seemed sketchy.', 'What kind of bagel can fly? A plain bagel.', 'Why didn’t the orange win the race? It ran out of juice.', 'I heard there was a new store called Moderation. They have everything there', 'Every night at 11:11, I make a wish that someone will come fix my broken clock.', 'They\'re making a movie about clocks. It\'s about time', 'They\'re making a movie about clocks. It\'s about time', 'Where did you learn to make ice cream? Sunday school.', 'To the person who stole my anti-depressant pills: I hope you\'re happy now.', 'What’s E.T. short for? He’s only got little legs.', 'What is this movie about? It is about 2 hours long.', 'Dad, can you put my shoes on? I don\'t think they\'ll fit me.', 'There\'s not really any training for garbagemen. They just pick things up as they go.', 'Dad died because he couldn\'t remember his blood type. I will never forget his last words. Be positive.'], false)));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!help fun') {
        s4dmessage.channel.send({
            embed: {
                title: 'Fun Commands',
                color: '#33ff33',
                image: {
                    url: 'https://i.imgur.com/1OWqTug.png'
                },
                description: (['\n', '!myname','\n', '!dadjoke', '\n', '!joke', '\n', '!web', '\n', '!gay', '\n', '!pun', '\n', '!meme', '\n', '!tip', '\n', '!uselessweb', '\n', '!owo','\n', '!discordmeme', '\n', '!comic'].join(''))
            }
        });
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!help useful') {
        s4dmessage.channel.send({
            embed: {
                title: 'Useful Commands',
                color: '#33ff33',
                image: {
                    url: 'https://i.imgur.com/1OWqTug.png'
                },
                description: (['!invite', '\n', '!web', '\n', '!support','\n', '!prefix', '\n', '!botusers', '\n', '!youtube', '\n', '!nick "Nickname"','\n', '!botping','\n', '!botcount', '\n'].join(''))
            }
        });
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!discordmeme') {
        s4dmessage.channel.send((listsGetRandomItem(['https://cdn.weeb.sh/images/BkGcKzJUG.png', 'https://cdn.weeb.sh/images/BJ3V-PEob.png', 'https://cdn.weeb.sh/images/SkNB-vVo-.png', 'https://cdn.weeb.sh/images/rktcMPVjW.png', 'https://cdn.weeb.sh/images/rkDQ-DVs-.png', 'https://images-ext-1.discordapp.net/external/I-Hlz4BZBzosYSzwt3mc8HQpsfKtwsLbvrPMLw6WbK4/https/cdn.weeb.sh/images/HJ__MinRZ.jpeg?width=417&height=465', 'https://cdn.weeb.sh/images/ryo1-DNjb.jpeg', 'https://cdn.weeb.sh/images/SJzKzv4oW.png', 'https://cdn.weeb.sh/images/B1QGZDEo-.png', 'https://cdn.weeb.sh/images/HkDIRqS7G.png', 'https://cdn.weeb.sh/images/HycHmpcWz.png', 'https://cdn.weeb.sh/images/rkWPGvNsZ.png', 'https://cdn.weeb.sh/images/r1-495Cj-.png', 'https://cdn.weeb.sh/images/Hk_5p9SmM.png', 'https://cdn.weeb.sh/images/B1mVgB4Yf.png', 'https://cdn.weeb.sh/images/S1l78CFa-.png', 'https://cdn.weeb.sh/images/HkCMeS4Kz.jpeg', 'https://cdn.weeb.sh/images/B15HZD4iZ.png', 'https://cdn.weeb.sh/images/r1SMR5r7G.gif', 'http://images7.memedroid.com/images/UPLOADED540/5e4dda9a785ed.jpeg', 'https://i.pinimg.com/originals/67/b0/dd/67b0dd3f6541d95486a695c17b8d609a.jpg', 'https://media.discordapp.net/attachments/691635398081904680/837880182307684372/image0.jpg?width=644&height=465', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyaDdoGZY9r776aZQhcjYdlQmjfwROHhAJA&usqp=CAU', 'https://memezila.com/saveimage/Being-a-discord-admin-be-like-Dont-make-me-tap-the-sign-meme-7372', 'https://do-prod-webteam-drupalfiles.s3-us-west-2.amazonaws.com/bcedu/s3fs-public/halloween%20Discord%20Meme%20Party%20-%20Insta%20Post-01.jpg', 'https://images3.memedroid.com/images/UPLOADED681/5ebc7e9e934dd.jpeg', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb422acf-39d6-4429-ace3-3b968531f65b/d8vrnct-c0c27ef4-54af-487f-bdd8-e66e5b20eb6b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ViNDIyYWNmLTM5ZDYtNDQyOS1hY2UzLTNiOTY4NTMxZjY1YlwvZDh2cm5jdC1jMGMyN2VmNC01NGFmLTQ4N2YtYmRkOC1lNjZlNWIyMGViNmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.c75vxezpfoORUK4Gd68V6vImMSlWne1jcZCDbGgw99U', 'https://pics.me.me/bring-back-discord-memes-68452899.png', 'https://pics.awwmemes.com/when-you-say-r-funny-is-actually-funny-discord-satan-sente-44536680.png', 'https://images3.memedroid.com/images/UPLOADED675/5ffcc0edd54a6.jpeg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_n5UcLRNX4PhmIdvixWEYRO6uMm6qfmVruw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMEBX-WOEORg9hf6G44exK2UUW0FOsHLaWw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgFz-oGhGdP3VFk0drHNkB9Qf1kyI_Wy8ow&usqp=CAU', 'https://i.kym-cdn.com/photos/images/original/001/481/714/4d7.png', 'https://cdn.ebaumsworld.com/2021/03/26/032710/86735845/funny-gaming-memes31.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvG7kgapqF4Zf1FAFaen2sJhGL2sFTA9IBQ&usqp=CAU', 'https://images7.memedroid.com/images/UPLOADED307/5ffce592d0f4b.jpeg', 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/949/242/datas/original.png', 'https://i.redd.it/enb05iawohc41.png', 'https://images7.memedroid.com/images/UPLOADED858/605b6140375f9.jpeg', 'https://www.memesmonkey.com/images/memesmonkey/8c/8cc98086806da3addd79ab5f9e4841d9.png', 'https://static.wikia.nocookie.net/ec5a95f6-b475-4544-8d89-3d1e1cb40c30', 'https://pics.awwmemes.com/when-you-turn-on-your-pc-just-to-study-epic-51748341.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5ty86cknykRMpZe9ifIdr7KIAbm7GS_ZeQ&usqp=CAU', 'https://images3.memedroid.com/images/UPLOADED594/605ba085877b2.jpeg', 'https://images3.memedroid.com/images/UPLOADED165/6058b068aa833.jpeg', 'https://images7.memedroid.com/images/UPLOADED971/60562308e3131.jpeg', 'https://images7.memedroid.com/images/UPLOADED962/6055c8d10abee.jpeg', 'https://images7.memedroid.com/images/UPLOADED294/6053664f2f7b8.jpeg', 'https://images3.memedroid.com/images/UPLOADED565/604a3a2248c83.jpeg', 'https://images3.memedroid.com/images/UPLOADED589/602c6bfc9b3d5.jpeg', 'https://images3.memedroid.com/images/UPLOADED83/601b5040e19a2.jpeg', 'https://images7.memedroid.com/images/UPLOADED590/601a6a2053b2b.jpeg', 'https://images3.memedroid.com/images/UPLOADED634/601423c5cfd16.jpeg', 'https://images7.memedroid.com/images/UPLOADED866/5ffa451de32ee.jpeg', 'https://images3.memedroid.com/images/UPLOADED53/5fd790ff26e21.jpeg', 'https://images3.memedroid.com/images/UPLOADED899/5fbea4dec4644.jpeg', 'https://images7.memedroid.com/images/UPLOADED441/5fb82512b8e92.jpeg', 'https://images3.memedroid.com/images/UPLOADED59/5faad7c31e963.jpeg', 'https://images3.memedroid.com/images/UPLOADED367/5f8ccaecc9cc4.jpeg', 'https://images3.memedroid.com/images/UPLOADED419/5f7d23d79dace.jpeg', 'https://images3.memedroid.com/images/UPLOADED114/5f659bd2778a1.jpeg', 'https://images3.memedroid.com/images/UPLOADED868/5f2d928d42d23.jpeg'], false)));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!dog') {
        s4dmessage.channel.send((listsGetRandomItem(['https://cdn.weeb.sh/images/H1xQxoVEYz.jpeg', 'https://cdn.weeb.sh/images/ByqCjVEtf.jpeg', 'https://cdn.weeb.sh/images/HJeICsN4YG.jpeg', 'https://cdn.weeb.sh/images/SJ2CoVEFz.jpeg', 'https://cdn.weeb.sh/images/HydO3ENKM.gif', 'https://cdn.weeb.sh/images/B1xYhs4EFM.jpeg', 'https://cdn.weeb.sh/images/S1GjAc4VKM.jpeg', 'https://cdn.weeb.sh/images/B1Ct34VYG.png', 'https://cdn.weeb.sh/images/BkAdj4EFz.gif', 'https://cdn.weeb.sh/images/S1Yx3NNFG.gif', 'https://cdn.weeb.sh/images/r1ez8nNEYG.jpeg', 'https://cdn.weeb.sh/images/HkeRQ3VEtf.jpeg', 'https://cdn.weeb.sh/images/rkbrlo4NKf.jpeg', 'https://cdn.weeb.sh/images/HJZkxhNNFz.jpeg', 'https://cdn.weeb.sh/images/HkRS2N4Yf.jpeg', 'https://cdn.weeb.sh/images/BJkTsE4FG.jpeg', 'https://cdn.weeb.sh/images/BkIrnVVYM.jpeg', 'https://cdn.weeb.sh/images/rklZRj4NYz.jpeg', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhUYGBgYGBkYGRkYGBgYGBoaGBgaGRgYGBgcIS4lHCErHxgZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCw2NDE2NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAJ8BPQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EADYQAAEDAgUCBAUEAQQDAQAAAAEAAhEDIQQSMUFRYXEFIoGREzKhsfAGwdHh8RRCUmIWI3IV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAgICAgEEAgEFAQAAAAAAAAECEQMhEjFBBBMiUWFxFEKBodHhMv/aAAwDAQACEQMRAD8A12hNaFwCY0LzCDmhGGrgFKAOhTCiUSB0cEYS5RApBQcLlwXIsKOUgKEbUwoiF0IpQykI6FICkKZQBELkQKgpioiFICiU2hQc/wCUSmlY6AAUwr1Lwx51hvdWB4Yzd5+ipY5DUWZELoWq7wxv+1/uFTxOEey5EjkaJShJA4tFQhdClCSoEEuQAqZTQElLcjJS3FA2cuAQyiBSomyYUFc4oMydD5EOXKCUMpMOQRQlQXIS5A+RCJBKnMhIObFhyY1yrsKLMiydljOplVg9Ma9FjVjQmJLXKS9PQbDlE1yVmQ50rDZYzIg5V2uRAosNjwVOZIzKQUWA0vUByUXIcyLoVljMgNRLzIHlS2KywyoizKswq/gWAmXCQqjscbbojDUy90e61Ri2MtAtt/SpYjxWnSYYaB23PUrFp+Ltq5pBDmuAEOAmb7awAto1HS7OqGNpWz0Nfxi9j7KtiPHGsGYm24XmcTjGgyXQ3fYR+5Xm/FfEsTiXZKVNzaIzDK1rWucdA97njTcAequNvyU6R9QdjwQHsMgiQQrtDESPNobH1Xjf0ayrTphtcgkHQCw9fX6L1VSvRDTLhEEm4tAkpeRtaKOKZkcW8KuXqjV8fwjgA2sBlES98k3tJJk900Pm4Mg3BGhB3CwyqUX0cclTLAcpzJLXLi9QmSOc5Ke9QXpTyhibDzojUVeVxKSkxDy9DnScy4lHJjsdnUFyW1yhzkOQWSXLgUqUWZKLAlzkOZC5yHMqWwBa5OCQ1qewJ8TsjBE5VwTIQEJUPiiZXNQOKljkUJxRYAQFdnSn1EpGcmkOYjVUVkbaqSkZuSGprFVc9G2oqTFasY8pa5z1LSlJiYxoQuCmUBcnaoQbQmvxGRhd7JIcsj9Q1nHIxp+b97Jx7NcKuRk+O+KOyN3LpIHPBTcAXspgSM7xLjuJ0A9FkeMQajRsCGjsBAHt91q0XgbzYLZKkdknui7Q8MDruku9StbDYJjAHVKhDRowb91m4bHBoLok87BYmO/UzM5Y51xY8SdB3VRvwZt/Z6OvjQXF8hrdGjkDhZfjeLbWY5he5tjGU/fnrKrjxIFphw7gj83+yw/E/EGjVwmNJkzPA9B6Kox3YSlqjy1Sg4O3deNeTovuXh+FDcLhsoiKLGOAOaCxoGu/f7L5Xh/C61Wma9INDW2eH+UkTyLRK+leBYzNhmsJBLCJI2PQp55JxoxcW4tltC5ESlkrgk6OYmVxC5rSiyqoysrixa6FLgoASf2KiCFC5xQFyfIQaB5UtuheEPY6AKgvQ5kMJVQgiglE5DCFZbSXRayQpTKpQC6pS+Nne4/KiWvUpjKaEiEKSZMotA5UBarTGyh+HdEpJIXFsSWoHU5VpzE2jSWDk2y/ZjxMipSMqWUncLcGGCL4IUymokQ9Jy7McUnJ1OiStMsCGwS910afw1yKLsOVNOiVeBBUtIR7jS2H8SLeiqKRUnDlXDCgPAUc5SZqsEFGij8Ary/i9aa8bAgegufsva/EavOfqDwdz3Z2azPtf+AunHOnszjhUb4nj/Ez5wf+8+4K0qD2xbhZviLDnLCL8dguwktMEW/NV2LcSJdms3EyC2F4bHYB1N5LxILi6eZ683Xsns3CCpleMrh6FOEuLIlGzy2Hp04Ba8G5zMccrg0CRr8x19wr7fB2uMi++nPPuoxvgrSC5liASANLbQVTwb69Ocod8uWCSQBIMBs2u0LpjJS2ibrTPf4LAOfhfgsjNnBcHHLLbkSd/wClq+FeE/BYW5i6YJ6G9h0iPqvN/pbxPE1KjKfw2NEjM8yAALmBHHVe4K4/U6kqNLi4tEMoJb8OrTHoyFwzm0XDBGWiuygYQ1GK38QQqlaoiL8oqeGK+Ni/hoxQKKlUCsPrCE5ZG9ExwRjspPoBJdQVh75Kl7wFCyNaLfpoy2hTKNkjEMVn4iU8SjHKSlbDJhi40iqylKJtFWmMgXSnVBNlopuzN+nioqxNXDkJWVaL6ghUXPuVXuuif4qb0w/iSSpoOvdUhUuic8qJcukdkeL2zT+IkvJSBWshNYpqMrM/h9lqlVhMNVZ1Ope6uOgixSbV0Li1bXQ0vU065CrZ+qbTIKbUemSlPtF9mIBCH4ypkkIGuWft2zf3eK2W3VZKAvVFrzKtsZOq04pIy91ylofTqjlPc8LMrHKkCuZUPHaux+/GNo22kKvVeFSZWcU+lRJ3VNqPY+XKNoFxKu4AZzfQXKAYU8pnyMPJMey1xqMpUZNyijz3i/hjHYh9UCAWgNGw5PtZYL8HBMbL1eIMgrGqMubD1XW4qzK7KbHC1kT2MdpEozRjZK+HE2TcbEJZTBJi8EfVbGA8Fpv+aQdbKphaJJzLVwFcXA/PdKKG2eg8I8FosYS2ZO5S6ggkcFafg4Dmtg90vxvDhpBaAJGyjLH42EVcqKtMgKX1As97igp1DeVySx+TohkUXVFt9QIS0Km65mU5jgN1knKJvLHjkr8nVFDDyoc8BA+SPKlKV/shY0lvo6tVDVUfWJKjEUTuup0pC0jHzIyzOtQCOIT24qFWNKCnvw/llJpS6LxqTpSR2IxUhLwzZEoKDQbFPDIWMmkqXZ1KCffQGJslHopxzCWwEqiYELaD0Y5cK/pYoOEppqBIxMCSNlVdWOy14t0zllKm4vRea4lOZUA1WZQxJESd1eqPYYlS5Sb4tAsKpSUrf0G94XNrRuoyyMrRKq1qDhqmoq/yVmk4xp/4JxtV0eUocBWeNSpptIbypYxw2Tljjewx+qmoUlpFxmLO6P4wVHMoYSURgl0YZcsp02aTK7QiOLWM95tCt0pOqTg7scZRcd6ZfY4vOigloMIcPXLdAkvDi4kqlF3RnLiladss5wFZw+KA3WaxhKn4FraqJQjLs3wzcXSNulULjZF4w0tDW7xJ9UvwChNzo25/ayHxCoXvcesLo9PiUU2PLkcqMeo4wqdQX6rSewbqnWp3st6M7EinOh3P2+5VatZ0f40t9fsmPeQU+kA7X+1SYULrAspkjUGB+eiPAEyIJBmDwfwhWq1AOYRtI+/9qvScGGwmP7/lDBHtvCGBl/p3Oy08awPYZAsJErzvhLySCV6RglhHIKdWqE3Ts8i+q1shVmYkEwnVcKC6SUnE0solq8eU6lVnoKK49f3LLaTYlVqjOCksr2um0aciZV86Vsza5PjEgxuVOHxYbZLr0uqS1l1UIKS5GWTNKDUaLdfEgrg8RZV304UUjBunkx/GkOHqLlUkDUc6eimniZbCtGs2CIVDJ5rcrLFFq9HRkypUkNDHNvsmYirlhHWboJsl4zDWBBTjDktouUuMeViW1S4woYMsg3U0GQZJUVWyZG6tR46SM/ejJKiqWi67K2CgLr27QiZDniTA0JWz+K/B5ik5S6th06TSJRvwwdvojxTWMb5XTokDFCdP8IhOMlaCSnjdeQ8NVcx0LTrV2lkkXCzhWBP2VnEtzW4hJ403ZcMrqpbBZVBtC4uElIY8TBtCNzryL2S40yXlbVDGUGkaqGU2gxsopnUaSJTfhnKCR6pOLfTBSj5RxpMNgpLIQimRHVTVN4laKorbIrl0ixSZIupeGk2QaiBqkMHulNt1Q4OCux5gWhQ2AZlNayRdVH0i24Olz23VOIlJtm5QrBjNbm/CpUnzJ5KRj6mUNb0CjDvt2kroh9Gr6IxLtlUcSjrVW7ugzbqkveNZn7J9gVcQXgzAjiJQ4et06KMTiJaYNxv91Sp1+Lnf+UIZvUcQA2TvO06aT7quyowkXm40/lV6j8rLf7pngXVfBVpiNkNjR7PA1f6XosA8kGeLLwmArkWMzNpXrvCHmQDvZNPZLR57GHK6J1XU6zLNNxutr/x05yTDhtf+Uup+lnXLXNB4/tefLBKb6r8nZHNGCq7T8GVi6DHDMzbVViwltirzcM6mHB4IPVRRw+ZgI3Wf/mLjLbQ44+T5R1ZVb5QLKc82hWn4R7mQ0aKr/o6omy6MaTimkcmRzjJp7IdTdNhKTWY8XIVhmdpE6plTExr5uiJcl0hRUZL5PZRYLqS4EEbo31BY5YkIDSGU8oSb2w5JaQDAdJRl1olRQwriJ2GpVHGYoj5Gkk2VJopKU1xb0WwJtKdTAhZTGPaZcb2twrT6/VC+yZYlB0mJqYeN7kyEvJFiOxGhUPqO1Oummt017iRA8uhk97p/s59X8RrKLWmIkH91Te5weGtaIdMb6f4Ta78nmJls+Ubk6QhZ5vKCGZRJ1JIkCAdtUKKa0b48rg7fZZpsAImxI+q1fiB7Jm4uesbLKqed4kaXPbQyEl1QgOax0E6RvtI+vssZQvp00dEMjlprT80XcaWQxwES4AnqeULQCSNDG+ip1nve3JN5APXg6cgKRVsAbEG/U/gVxVaZx5ZKM2114ofh2lts07np2KvPxAOUAWCoh0WN7TbW5uhNQmALgiZPsjik7Q5ZHNbNLI95kDSw+yVVwz2GXNMH19zsk4esWtPmsRIEk36cWTWYt1tp+YdOFlKUnKklRtDHBRttp/QLabzo0nsjZQfrBBjcfZOFcFrWMGWbme5t+cIGYvLmZmtP31ji4RHJJN2hPDCrsN1heRaOiZSM5WGPMRfWwufsqDca4mC2WTqbev8AhXPDntcXOEgNmxMmSPpqtYzUpJUN+mcY8k00V/Fakvnqpwo8pJ7D7pWNuVLKkM1i66SRL3w75fWEnEMfIO26tU3SVbdSBaeycRs8z4gzKMzbT+FJwzNTF9v7TvFrZQbHN7jcJLKlpBVCssPLi0N0A9wkYJpzuB2P5CN9fyE7gFUfC6xe55HRo9rlNIVno8GSXzJgey934MdJB5Bj915TwXCgxwI/AvZYJwAhp9NEumV2jQdVuQjY9Y+PrkPHVs+xhNw2IneypPZLWi54nhW1GERJAkd14QVi3QmxuF79lVeE/UJLKzmtYCC4EWIiRJv2n2WWaMWuTRMXJPToa7xR+XKNxHuhPxDEvMn/AGg3WRWqQQ6DEzMTpqAFbdXcXxki29o3k8rinKcWuPR1RUZqpPZFfEus2bmR17qX4im0hujhu7dU8S25czWY8x0NiSf4QvznyvIJgTlAgTytOXJJpmLjwvl+i83FsLg07x5vVFii1r3BrgYsd+0rOp0Ghzg0WiSNgBYQFLwJcW2Np2m9/a6qn5M5SjVRRebUeGwPyUl1RrTfW5HoLpbHmCOp521/dJqvaTMSPLqZuBePzZFCTflllwBmdbFXaWHoQs51eBPM9+54CClWBHmjp+eylwb6dFQyJdqzPY8GPNOWdOdPXX7qySZgkydDa94PQWKpMpwcwsYPE/LBnnf6J1J7mgnW8i1thoOwstU9HOGz52wM0EwCdxMWjufZKqYgudOWCJDvfn0RukGbDSJMbTE73QVKnTqbbTI+6Gxro0cLiA1vyy4A6gHi2k7TbhJxOYOnLAPlBIInex7m6VLTH+0xFhcx+9902tUMNjzBsxm3AgBx48x9oUKK2/s1eXSrVE0hckuAiDroSbbcomQfmAsSO+9o21Vem5oG17nQ36EqxTZIgETbWYna/dMxaOrYepUH/qFxIjMJgkDMAYkC6PD4V/y+VsARJkTJ0LZtI+vRJY/I50EkgEt1aBpcwd4TsOHa6gNueOD1vfZRJyfVbNYLHrldiHPc0kRoRPTYglE/FWyzdsEibiND+6ZUYT5r3gRI2gAnr9L9kbGs+YdoOwJv9R+Silohtp9v/hRqYp7HCQA3O4OBs6/BNvVSMQGtLQNRYx7Zjzr7rUpUQ5xDhnY4ZexGhHaJ5VWphhlsB8w3GwuI4+0pyWgl8o0Q7EZWjNpnAF7iTYesQrOFqsbLWuzS2ZH7jn+FRxrZgu8zsxcADpfy+3VJp4locLBsyMwBIPe972VRStMqM5L4+C1icUA6L3068x/CMvloI+6pYwh4yFpvcEcQCHNPNwm4HPkh+uoPIjWNltejVS2XMONNR+61aMEeizGkW0v+2ytYatcfnqpUqZbpo8/+r25QwjY/Q6rzdPFwYO5H8L0/6zYYAAnccxp+d14qrTd5AB5nzbqHOBHsFvaZkalXF+Uj091e/TtHKHTqTKq4HAyx73wTkD8sGYLm5j2u6BaYVjBVIJIcC3k2mdJGgO2uqExLZ73whgyCNTPqt/DDQ+681g3tYxvJub9JF/qtPAeIgG4WUpbNorRq+I0s+QbXJ7I6GHRQHAESRtG/Qrq1R+WQBbYa+nK1TVWRu6AfVDXALD/UILnmBMtFugBMiFYxWPaLu0gkzqCNUH+poPaHukOjY6y2Lg9FjN2qG4t9GCyjI8zocDm1B/6676jRc2o/M0nS4M/Y9CFYxNRkgNe3pOtgBtrY78JJaQDA81/LJMxpB3N7aeq52k9Ml3GV1QqpTaHvcwEXu0kO2gi6L4LANXSQCI0MH8HsnitTHmeMwI5LYLiT5iNhlneOypYcOeXQYImRZxAkQ4yIOm3/ABCMceLo0yOco8tV+/Ix1KSS2RLWiZA0Hmm35CVWw7RmgOECxIh1jrB6mffVWGVAfMIad2zY9YO4/fTVV31S5xEjyzljjKLCf/oK31ZzL8opVHvbJY3MDmOW8mG3vtoEXwrExaxHIIBJBn3twml8BrheRAm1gWgSOsn0UOr+QSQMxeXFugAc9hI5t7+qdFudxqv9kFlpFrxcdduRcKcNQB802dFidDede49kj/8AQlriNxlbxq08X0PuEFbEsFiYG2nAnXqj8GTKbrFp7n03n6Ky18GRMGLeiNlFuk9RI5FwodQNhbW3snYU30QcTLQDGvv+FGyg2MxHExumtpBoMgEgCeJjUImGLRYifopbQlGXginREkmbmR3Ogj1+iP4MEg30PsIH0CdQdeDp+SlPJLssnT3Sf5B2G1hdpB2E7dPSUFR7W2y3mx2MXgnfRHSpH5iYmYA4nbhF8EEX0Jj16bi0prXYWwG1s9mgk6O1sY0O2gTKzXNbOW28EEWnUJLMOabjecz5ncRwrBm4DzbUxEi4NuxUO7OmPtcabdlcVDJ3Bje5kbcf0idWlugsRpawue8qfhhz8snkfsq+Ia4nI05QbzvxHurOdh0qzjFo1kn6FXaTt9ybERpMz1uUvB0oAl06zIvKlxDSDFpSaphZz2gmMotP9+qCrRZkgDrH/YGQR7fRMcbAjkz6rnFoBJJJ276JbbGuhDqbXeaLRHQ20H0TQwQRNgBlBkwN/TRNzAsj6KC2wJ1tHXmU9ibsXgpBIIuCe12xdOrPh9haTOxAgWEa7qQNCDJJAkiET6BvvYjXc/0h2hptIXjcMyo5jiYykwDoQWkG/f7lJxGApSxwYMzHOc2BoXWHrY+6c2XEN3kzxohpElwn06nqjmxOTYFPCsl7sh87IdO8kx2FyEFXBsJaBDQWtcbWDmzJPc/dWqlUG2/OwjhJpxJGp3J7J83dA9B/CsHGSBHvEQOis03ttwHNntMx+cKtmjyluYa6xBSWYi8GdbDZSpfZXOXSPSnxMAODXZRJAI4AN49Psubi2eWZnO+XB0kNbInXqF54VjERrH3/AD2Rh0NkC4kGSYIOoI/hVzsrnKmy/wCNUcxMOa6bG8AgwQ4bgxxcrKqYZ+XyaNiZE7/LB2ib6qzUrHKCDqZEjcSPaZTA4AF+xMQN7eZNuw5yZmswrc4eDcEi/fWPzVPqUiSRm1mQdo4i8CEyo2YP/ITxPdDUpeZp41AnU2vzupqyba7Iexz2xYwCCbGfMSZzXdr3ul4ZmSZ12OkgaCTsmPrBrjE7220B+6j4giTqRBtq38hPoOTqvBL8K7RsNzNABNwTBgunS0fRVDgCMxBBl14kFrR5SY4zHXsr2KeNdAPzTsELYuNDEwJ25Kf4E5Oir/pCXSYDOROYSWgRrIIBk7SFerU2E5XMBJhtwAMosRA00sNoS6dUluaB5Rl03Nx+6U6pN+/cWGiUo2qsqM68CcJhGsiwJEkGMu8/KLWtqlVaJJLgWtknmbHS0mBNp5WgfmgATln6X+6RVyzprf8Ab9k9olSP/9k=', 'data:image/jpeg;base64,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', 'data:image/jpeg;base64,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', 'data:image/jpeg;base64,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'], false)));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!cat') {
        s4dmessage.channel.send((listsGetRandomItem(['https://cdn.weeb.sh/images/r1XIM5ENYM.jpeg', 'https://cdn.weeb.sh/images/SJqyqNEFz.jpeg', 'https://cdn.weeb.sh/images/BylnTKENKz.jpeg', 'https://cdn.weeb.sh/images/Bkex5NNFM.jpeg', 'https://cdn.weeb.sh/images/rJVCKNNYG.jpeg', 'https://cdn.weeb.sh/images/BkbQqEEKz.jpeg', 'https://cdn.weeb.sh/images/SyDhtE4Yz.jpeg', 'https://cdn.weeb.sh/images/S11CKNVtM.png', 'https://cdn.weeb.sh/images/S1WaFENFf.jpeg', 'https://cdn.weeb.sh/images/SkWzatV4tz.png', 'https://cdn.weeb.sh/images/S1WIGqVEFM.jpeg', 'https://cdn.weeb.sh/images/rJRy94EKG.gif', 'https://cdn.weeb.sh/images/HkeJRKV4KG.png', 'https://cdn.weeb.sh/images/B1eM6YN4KG.jpeg', 'https://cdn.weeb.sh/images/H1ylcNVFM.jpeg', 'https://cdn.weeb.sh/images/r1Hf5NNKM.jpeg', 'https://cdn.weeb.sh/images/SJ2fc44YM.jpeg', 'https://cdn.weeb.sh/images/r1gUzqVEYf.jpeg', 'https://cdn.weeb.sh/images/r1C6Y4VYz.jpeg', 'https://cdn.weeb.sh/images/rJgM0KN4tz.png', 'https://cdn.weeb.sh/images/Hyg17cNVYf.jpeg', 'https://cdn.weeb.sh/images/HkdaK4NKz.jpeg', 'https://cdn.weeb.sh/images/BkCxcEEYG.jpeg', 'https://cdn.weeb.sh/images/BJQgcVEKM.jpeg', 'https://cdn.weeb.sh/images/B1TnKENFM.jpeg', 'https://cdn.weeb.sh/images/SkHpKENtG.jpeg', 'https://cdn.weeb.sh/images/SkeEl9V4tz.jpeg', 'https://cdn.weeb.sh/images/H1X0YEEYM.png', 'https://cdn.weeb.sh/images/ryWCfq44tz.jpeg', 'https://cdn.weeb.sh/images/SJZJ7qNEYG.jpeg', 'https://cdn.weeb.sh/images/BkfWXcE4FG.jpeg', 'https://cdn.weeb.sh/images/r1SntENtM.jpeg'], false)));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'shit') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'fuck') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 's*x') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'bitch') {
        s4dmessage.delete();
    }

});

function mathRandomInt(a, b) {
    if (a > b) {
        // Swap a and b to ensure a is smaller.
        var c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}


s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!random') {
        s4dmessage.channel.send(String((mathRandomInt(0, 100))));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if (((s4dmessage.content) || '').startsWith('!kill' || '')) {
        s4dmessage.channel.send(String((String(s4dmessage.mentions.members.first()) + String(listsGetRandomItem([' was squashed by a storm of baked potatoes', ' tried to outrun a train, the train won.', ' dies from posting normie memes.', ' is killed in a robbery gone wrong.', ' has been found guilty, time for their execution!', ' sneezed with their eyes open, and their brain fell out', ' dies after swallowing a toothpick.', ' slipped in the bathroom and choked on the shower curtain.', ' dies by swearing on a Christian Minecraft server', ' got stepped on by an elephant.', ' can\'t be killed, as they are a ghost.', ' dies in a horrible accident, and it was engineered by', ' bleeds out after trying to get on "Dumbest hillbilly moments".', ' died from doing a fortnite dance', ' talked back to mods and got destroyed by the ban hammer.', ' cranks up the music system only to realize the volume was at max and the song playing was Baby by Justin Bieber...', ' died an honorable death. Death by snoo snoo.', ' dies from dabbing too hard.', ' trips over his own shoe laces and dies.', ' talked back to their mom to death - this message is sponsored by mothers across America', ' drowns in a tub of hot chocolate. How was your last drink?', ' spins a fidget spinner and when it stops he dies...', ' fell down a cliff while playing Pokemon Go. Good job on keeping your nose in that puny phone. :mobile_phone: ', ' died from :b:', [s4dmessage.mentions.members.first(), ' died due to ', s4dmessage.member, ' being so stupid'].join(''), ' drank some toxic soda before it was recalled.', [s4dmessage.member, ' kills ', s4dmessage.mentions.members.first(), ' with there own foot'].join('')], false)))));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    s4d.database.add(String((String(xp) + String((s4dmessage.member).user.id))), parseInt(1));
    member_xp = s4d.database.get(String((String(xp) + String((s4dmessage.member).user.id))));
    if (member_xp == 100) {
        s4d.database.set(String((String(level) + String((s4dmessage.member).user.id))), 1);
        s4dmessage.channel.send(String((['Congrats ', s4dmessage.member, ', you just turned level 1!', '\n', lvl_1].join(''))));
    } else if (member_xp == 200) {
        s4d.database.set(String((String(level) + String((s4dmessage.member).user.id))), 2);
        s4dmessage.channel.send(String((['Congrats ', s4dmessage.member, ', you just turned level !', '\n', lvl_2].join(''))));
    } else if (member_xp == 300) {
        s4d.database.set(String((String(level) + String((s4dmessage.member).user.id))), 3);
        s4dmessage.channel.send(String((['Congrats ', s4dmessage.member, ', you just turned level 3!', '\n', lvl_3].join(''))));
    } else if (member_xp == 400) {
        s4d.database.set(String((String(level) + String((s4dmessage.member).user.id))), 4);
        s4dmessage.channel.send(String((['Congrats ', s4dmessage.member, ', you just turned level 4!', '\n', lvl_4].join(''))));
    } else if (member_xp == 500) {
        s4d.database.set(String((String(level) + String((s4dmessage.member).user.id))), '5');
        s4dmessage.channel.send(String((['Congrats ', s4dmessage.member, ', you just turned level 5!', '\n', VIP].join(''))));
    }

});

s4d.client.on('ready', async () => {
    lvl_1 = '' + '';

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!botinfo') {
        s4dmessage.channel.send({
            embed: {
                title: 'Bot Info',
                color: '#33ff33',
                image: {
                    url: null
                },
                description: (['I am in ', s4d.client.guilds.cache.size, ' discord servers!', '\n', '\n', 'My ping is ', s4d.client.ws.ping, ' ms (If the ping is above 100 please send me a screen shot)'].join(''))
            }
        });
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!myname') {
        s4dmessage.channel.send(String(('Your name is ' + String(s4dmessage.member))));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!dadjoke') {
        s4dmessage.channel.send((listsGetRandomItem(['I got a reversible jacket for Christmas, I can\'t wait to see how it turns out.', 'This furniture store keeps emailing me, all I wanted was one night stand!', 'In my career as a lumberjack I cut down exactly 52,487 trees. I know because I kept a log.', 'I started a new business making yachts in my attic this year...the sails are going through the roof', 'It was raining cats and dogs the other day. I almost stepped in a poodle.', 'Why don’t skeletons ever go trick or treating? Because they have nobody to go with.', 'I\'ll tell you what often gets over looked... garden fences.', 'Why didn’t the orange win the race? It ran out of juice.', 'Man, I really love my furniture... me and my recliner go way back.', 'I asked the surgeon if I could administer my own anesthetic, they said: go ahead, knock yourself out.', 'What do you call a guy lying on your doorstep? Matt.', 'Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan.', 'I used to work for a soft drink can crusher. It was soda pressing.', 'What\'s the worst part about being a cross-eyed teacher?  They can\'t control their pupils.', 'What do you call a cow on a trampoline? A milk shake!', 'My sister bet me $15 that I couldn\'t build a car out of spaghetti. You should have seen the look on her face as I drove pasta.', 'Slept like a log last night … woke up in the fireplace.', 'I had a dream that I was a muffler last night. I woke up exhausted!', 'I applied to be a doorman but didn\'t get the job due to lack of experience. That surprised me, I thought it was an entry level position.', 'I had a rough day, and then somebody went and ripped the front and back pages from my dictionary. It just goes from bad to worse.', 'I invented a new word! Plagiarism!', 'Yesterday I confused the words "jacuzzi" and "yakuza". Now I\'m in hot water with the Japanese mafia.', 'My new thesaurus is terrible. In fact, it\'s so bad, I\'d say it\'s terrible.', 'I\'m afraid for the calendar. Its days are numbered.', 'My wife said I should do lunges to stay in shape. That would be a big step forward', 'Why do fathers take an extra pair of socks when they go golfing?" "In case they get a hole in one', 'Singing in the shower is fun until you get soap in your mouth. Then it\'s a soap opera.', 'What do a tick and the Eiffel Tower have in common?" "They\'re both Paris sites.', 'Why did the man name his dogs Rolex and Timex? Because they were watch dogs.', 'Why don’t crabs give to charity? Because they’re shellfish.', 'What did the evil chicken lay? Deviled eggs.', 'What’s the best way to watch a fly-fishing tournament? Live stream.', 'My wife asked me to sync her phone, so I threw it into the ocean. I don’t know why she’s mad at me.', 'Why do you never see elephants hiding in trees? Because they’re so good at it.', 'What do you call 50 pigs and 50 deer? 100 sows and bucks.', 'What’s brown and sticky? A stick.', 'What do you call a fish with no eye? A fsh.', 'What do you call a lazy kangaroo? Pouch potato.', 'I got hit in the head with a can of Diet Coke today. Don’t worry, I’m not hurt. It was a soft drink.', 'Why do melons have weddings? Because they cantaloupe.', 'What do you call a fake noodle? An impasta. When the noodle is sus *among us drip*', 'Justice is a dish best served cold. If it were served warm, it would be justwater.', 'Did you hear the rumor about butter? Well, I’m not going to spread it! A steak pun is a rare medium done well.', 'Stop looking for the perfect match; use a lighter.', 'Can February March? No, but April May!', 'Why was 6 afraid of 7? Because 7 ate nine!', 'I\'m so good at sleeping that I do it with my eyes closed.', 'It really takes guts to be an organ donor.', 'What kind of shoes does a lazy person wear? Loafers.', 'What do houses wear? An address.', 'What did the two pieces of bread say on their wedding day? It was loaf at first sight.', 'Why couldn\'t the bicycle stand up by itself? It was two tired!', 'How does a lawyer say goodbye? I\'ll be suing ya!', 'You can\'t trust atoms. They make up everything!', 'Can I dive in this pool? It deep-ends.', 'Which state has the most streets? Rhode Island.', 'Why do vampires always seem sick? They\'re coffin.', 'What do you call a fibbing cat? A lion.', 'If a child refuses to nap, are they guilty of resisting a rest?', 'What rock group has four men who don\'t sing? Mount Rushmore.', 'My boss told me to have a good day, so I went home!', '"Did you get your haircut?" No, I got them all cut.', 'How many apples grow on a tree? All of them!'], false)));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!qr') {
        s4dmessage.channel.send({
            embed: {
                title: 'QR Code',
                color: (colourRgb(19, 106, 55)),
                image: {
                    url: 'https://i.imgur.com/NSwwpOS.png'
                },
                description: 'Here the qr code to my website or my bot invite'
            }
        });
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'Stfu') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'Shit') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'stfu') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'stupid') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'Fuck') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'sex') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'Bitch') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'S*x') {
        s4dmessage.delete();
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == 'Sex') {
        s4dmessage.delete();
    }

});

function mathRandomInt(a, b) {
    if (a > b) {
        // Swap a and b to ensure a is smaller.
        var c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}


s4d.client.on('message', async (s4dmessage) => {
    arguments2 = (s4dmessage.content).split(' ');
    prefix = arguments2.splice(0, 1)[0];
    command = arguments2.splice(1, 1)[0];
    if (!s4d.database.has(String(((s4dmessage.guild || {}).id)))) {
        s4d.database.set(String(((s4dmessage.guild || {}).id)), '!');
    }
    if (command == 'bal' && prefix == s4d.database.get(String(((s4dmessage.guild || {}).id)))) {
        if (arguments2[2] == (s4dmessage.mentions.members.first())) {
            if (s4d.database.has(String(((s4dmessage.mentions.members.first()).user.id)))) {
                s4dmessage.channel.send({
                    embed: {
                        title: ((s4dmessage.mentions.members.first()).user.username),
                        color: null,
                        image: {
                            url: null
                        },
                        description: ('**Balance: **' + String(s4d.database.get(String(((s4dmessage.mentions.members.first()).user.id)))))
                    }
                });
            } else {
                s4dmessage.channel.send({
                    embed: {
                        title: ((s4dmessage.mentions.members.first()).user.username),
                        color: null,
                        image: {
                            url: null
                        },
                        description: '**Balance: ** 0'
                    }
                });
            }
        } else {
            s4dmessage.channel.send({
                embed: {
                    title: ((s4dmessage.member).user.username),
                    color: null,
                    image: {
                        url: null
                    },
                    description: ('**Balance: **' + String(s4d.database.get(String((s4dmessage.author.id)))))
                }
            });
        }
    }
    if (command == 'beg' && prefix == s4d.database.get(String(((s4dmessage.guild || {}).id)))) {
        if (mathRandomInt(1, 5) > 3) {
            added = mathRandomInt(1, 100);
            s4dmessage.channel.send(String(('A kind stranger gave you ' + String(added))));
            s4d.database.add(String('points'), parseInt(added));
        } else {
            s4dmessage.channel.send(String('they punched in your face :('));
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '(prefix)kick' && (s4dmessage.member).hasPermission('KICK_MEMBERS')) {
        s4dmessage.channel.send({
            embed: {
                title: '**Command: Ban**',
                color: '#000000',
                image: {
                    url: null
                },
                description: (['**Description:** kick a member', '\n', '**Usage:** (prefix)kick [user]'].join(''))
            }
        });
    } else if ((((s4dmessage.content) || '').startsWith('(prefix)kick' || '')) && (s4dmessage.content).length > 7) {
        if ((s4dmessage.member).hasPermission('KICK_MEMBERS')) {
            if ((s4dmessage.mentions.members.first()) != null) {
                if ((s4dmessage.mentions.members.first()).hasPermission('KICK_MEMBERS')) {
                    s4dmessage.channel.send({
                        embed: {
                            title: null,
                            color: '#000000',
                            image: {
                                url: null
                            },
                            description: 'You cannot kick someone that has a role above your role.'
                        }
                    });
                } else {
                    s4dmessage.channel.send({
                        embed: {
                            title: null,
                            color: '#000000',
                            image: {
                                url: null
                            },
                            description: ([(s4dmessage.member).user.username, ' kicked ', (s4dmessage.mentions.members.first()).user.username].join(''))
                        }
                    });
                    (s4dmessage.mentions.members.first()).kick();
                }
            } else {
                s4dmessage.channel.send({
                    embed: {
                        title: '**Error!**',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: 'Please mention a valid user!'
                    }
                });
            }
        } else {
            s4dmessage.channel.send({
                embed: {
                    title: '**Error!**',
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: 'You do not have permission to perform this command!'
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!ban' && (s4dmessage.member).hasPermission('BAN_MEMBERS')) {
        s4dmessage.channel.send({
            embed: {
                title: '**Command: Ban',
                color: '#000000',
                image: {
                    url: null
                },
                description: (['**Description:** ban a member', '\n', '**Usage:** (prefix)kick [user]'].join(''))
            }
        });
    } else if ((((s4dmessage.content) || '').startsWith('!ban' || '')) && (s4dmessage.content).length > 6) {
        if ((s4dmessage.member).hasPermission('BAN_MEMBERS')) {
            if ((s4dmessage.mentions.members.first()) != null) {
                if ((s4dmessage.mentions.members.first()).hasPermission('BAN_MEMBERS')) {
                    s4dmessage.channel.send({
                        embed: {
                            title: null,
                            color: '#000000',
                            image: {
                                url: null
                            },
                            description: 'You cannot kick someone that has a role above your role.'
                        }
                    });
                } else {
                    s4dmessage.channel.send({
                        embed: {
                            title: null,
                            color: '#000000',
                            image: {
                                url: null
                            },
                            description: ([(s4dmessage.member).user.username, ' banned ', (s4dmessage.mentions.members.first()).user.username].join(''))
                        }
                    });
                    (s4dmessage.mentions.members.first()).ban();
                }
            } else {
                s4dmessage.channel.send({
                    embed: {
                        title: '**Error!**',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: 'Please mention a valid user!'
                    }
                });
            }
        } else {
            s4dmessage.channel.send({
                embed: {
                    title: '**Error!**',
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: 'You do not have permission to perform this command!'
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('!help admin' || '')) && (s4dmessage.member).hasPermission('ADMINISTRATOR')) {
        s4dmessage.channel.send({
            embed: {
                title: 'Admin Commands',
                color: '#33ff33',
                image: {
                    url: 'https://i.imgur.com/1OWqTug.png'
                },
                description: (['If you want commands [Click here](https://www.discordpepebot.tk/cmds)', '\n', '\n', '!ban @username', '\n', '\n', '!kick @username', '\n', '\n', 'More admin commands coming soon!'].join(''))
            }
        });
    }

});

var weedbusness, weedbal, totalweed;


s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!openshop') {
        s4d.database.set(String(((s4dmessage.member).user.id)), weedbusness);
        s4d.database.add(String((String((s4dmessage.member).user.id) + String(weedbal))), parseInt(600));
        s4dmessage.channel.send({
            embed: {
                title: null,
                color: '#000000',
                image: {
                    url: null
                },
                description: 'Opened your new Shop business!'
            }
        });
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!balance') {
        if (s4d.database.has(String((String((s4dmessage.member).user.id) + String(weedbusness))))) {
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: '#000000',
                    image: {
                        url: null
                    },
                    description: (['The current bank balance of ', s4dmessage.member, '\n', '\n', '**Balance**', '\n', s4d.database.get(String((String((s4dmessage.member).user.id) + String(weedbal)))), '$'].join(''))
                }
            });
        } else {
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: (['You don\'t already have a shop!', '\n', 'Open one with !openshop'].join(''))
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!shopbuy') {
        if (s4d.database.has(String((String((s4dmessage.member).user.id) + String(weedbusness))))) {
            (s4dmessage.channel).send({
                embed: {
                    title: null,
                    color: '#000000',
                    image: {
                        url: null
                    },
                    description: (['How many memes do you want to buy?', '\n', '\n', 'You can buy 2 memes', '\n', ':one: Buy 1 meme', '\n', ':two: Buy 2 memes', '\n', ':three:', '\n', ':four:', '\n', 'Price (Per)', '\n', '$245'].join(''))
                }
            });
            (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, {
                time: (2 * 60 * 1000),
                max: 1
            }).then(async (collected) => {
                s4d.reply = collected.first().content;
                if ((s4d.reply) == ':one:') {
                    s4d.database.add(String((String((s4dmessage.member).user.id) + String(totalweed))), parseInt(1));
                    s4d.database.subtract(String((String((s4dmessage.member).user.id) + String(weedbal))), parseInt(245));
                    s4dmessage.channel.send({
                        embed: {
                            title: null,
                            color: '#000000',
                            image: {
                                url: null
                            },
                            description: (['You bought **1** new meme!', '\n', 'You have now a total of ', totalweed.user.id, 'memes'].join(''))
                        }
                    });
                } else if ((s4d.reply) == ':two:') {
                    s4d.database.add(String((String((s4dmessage.member).user.id) + String(totalweed))), parseInt(2));
                    s4d.database.subtract(String((String((s4dmessage.member).user.id) + String(weedbal))), parseInt(490));
                    s4dmessage.channel.send({
                        embed: {
                            title: null,
                            color: '#000000',
                            image: {
                                url: null
                            },
                            description: (['You bought **2** new memes!', '\n', 'You have now a total of ', String((s4dmessage.member).user.id) + String(totalweed), 'memes'].join(''))
                        }
                    });
                }

                s4d.reply = null;
            }).catch(async (e) => {
                console.error(e);
                s4dmessage.channel.send({
                    embed: {
                        title: null,
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: (['The buy request has been canceled', '\n', 'Balance: ', s4d.database.get(String((String((s4dmessage.member).user.id) + String(weedbal)))), '$'].join(''))
                    }
                });
            });
        } else {
            s4dmessage.channel.send({
                embed: {
                    title: null,
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: (['You don\'t have a shop business!', '\n', 'Open one with !openshop'].join(''))
                }
            });
        }
    }

});


s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.content) == '!prefix') {
        s4dmessage.channel.send(String('My prefix is !'));
    }

});

s4d;