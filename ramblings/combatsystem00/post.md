<iframe frameborder="0" height="100%" width="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" src="https://youtube.com/embed/DldY3d3ZUO4?autoplay=1&controls=1&showinfo=0&autohide=1&loop=1&disablekb&playlist=DldY3d3ZUO4" referrerpolicy="strict-origin-when-cross-origin" anonymous></iframe>

# Combat System Design Idea

In order to understand the intricacies of the presented combat system idea, I have listed a few points that help readers understand *where I am coming from* although it is completely okay to skip them if you are already familiar with the games.

## Required Understanding
### Combat System in [Helen's Mysterious Castle](https://store.steampowered.com/app/418190/Helens_Mysterious_Castle/)

[![Combat in Helen's Mysterious Castle](https://playism.com/wp-content/uploads/2021/05/helens_03.jpeg)](https://playism.com/wp-content/uploads/2021/05/helens_03.jpeg)  
Source: [playism.com](https://playism.com/en/game/helens-mysterious-castle/) 

I have chosen this example purely because of its simplicity and ease of explanation. I do have to admit that I have a soft spot for this game and regard it as a niche gem with fresh ideas.  
The combat system in **Helen's Mysterious Castle** is straightforward but yet strangely mesmerizing as it enables reactive combat with just a few rules.
- Player and Opponent have different combat actions
- All combat actions (including using an item) have values for effect, defense and wait
- For a combat action to be executed, the user has to wait for the wait value to reach zero as it counts down
- If the combat action is offensive, the user will inflict damage equal to the combat action's effect value after substracting it from the defense value of the opponent's chosen combat action

In the screenshot displayed above, the player's combat action **Longbow** is executed before the opponent's combat action **Bodyblow**.  
The effective damage is 6 as the Longbow's effect value is subtracted by the Bodyblow's defense value.  
The reactive combat system is established as the player's combat action is heavily influenced by the opponent's chosen action.  
Combat actions can essentially be reacted by choosing combat actions depending on the situation
- Heavy attacks have a higher wait value which indicates a high risk of getting attacked without a chance to set up a defense
- Magic attacks ignore the opponent's defense value, yet possess low defensive values in return. You plan your actions to not receive any attacks as you channel magic attacks
- Swift dagger stabs have low effect values but also low wait values therefore these actions can be spammed or used to gauge the battle situation ahead

The dynamic that the wait mechanic introduces is one of the many twists that can be found in turnbased RPGs in order to motivate reactive actions from the player so as to encourage and foster engagement.  
This understanding is important because turnbased combat is often misunderstood as a static back and forth between player and enemy actions with the occassional need for healing.

### Combat System in [For Honor](https://store.steampowered.com/app/304390/FOR_HONOR/)

[![Combat in For Honor](https://bitsandpieces.games/wp-content/uploads/2017/04/for-honor-combat-screenshot.jpg)](https://bitsandpieces.games/wp-content/uploads/2017/04/for-honor-combat-screenshot.jpg)  
Source: [bitsandpieces.games](https://bitsandpieces.games/2017/03/04/the-best-thing-about-for-honor/) 

Although I haven't personally experienced For Honor, I am referencing my knowledge from a couple of gameplay videos in order to explain what I understand.  

**For Honor**'s combat system is titled 'Art of Battle' and is considered unique as it introduces strategic combat stances and locks the duelists into their own combat situation.  
Within a locked combat situation, the players can employ different combat actions depending on their chosen class.  
Attacks have a certain animation pattern which can be evaded, blocked or countered. Similar to **Helen's Mysterious Castle**, reactive combat decisions are demanded from the players.  

Contrary to **Helen's Mysterious Castle**, **For Honor** also makes use of terrain decisions and circumstances surrounding the player's knowledge of their own character and level of pattern recognition in regard to attack animations.
Instead of strictly enforced turnbased combat, the players naturally take turns attacking each each other while simultaneously dealing with the combat actions of their opponent.  

Understanding the way how combat works in **For Honor** helps in understanding how employing such a combat system in a generally hectic multiplayer action game can influence the overall rhythm of a match.  
In comparison to other multiplayer melee fighting games such as **Chivalry** and **MORDHAU**, the dueling system feels much more official and enforced as you would typically expect from an RPG with enemy encounters.  
The combat in the other games I've mentioned feel much more unconstrained, 'messy' and in a weird way personal. The system is not guiding the opponent to attack you but they do so with deliberate intention.  
This conscious combat lock-on in **For Honor** is something that I wanted to point out as a way to bring awareness of the context on entering and exiting combat situations.  

### Combat System in [Growlanser IV](https://en.wikipedia.org/wiki/Growlanser:_Wayfarer_of_Time)

[![Combat in Growlanser 4](https://gamecritics.com/files/images2012/growlanser-wayfarer-time-04.jpg)](https://gamecritics.com/files/images2012/growlanser-wayfarer-time-04.jpg)  
Source: [gamecritics.com](https://gamecritics.com/stevegillham2gc/growlanser-wayfarer-of-time-second-opinion/) 

Growlanser's combat system is unique as it is essentially an RTS system inside of an RPG, improving upon concepts first introduced in The Legend of Heroes II.  
Essentially, selecting combat actions happens inside of a paused menu and the execution of those actions also depends on the distance of the user to the opponent.  
Melee fighters have to physically move to get into the weapon attack range while for magic it is only a matter of time until a magic spell had been sufficiently channelled in order to cast it onto any target.  
What Growlanser excels at is the usage of the actual game map that becomes the battlefield and also that each combat action also has recovery delay before the next action can be executed.  
This is akin to **Helen's Mysterious Castle**'s wait value although the implementation of the recovery delay is done at different times:
- In **Helen's Mysterious Castle**, the combat action is executed after the wait value has decreased to zero. The wait value can be interpreted as the attack preparation.   
  After the wait value reaches zero the combat action is executed and the player can then choose the next combat action to be queued.
- In **Growlanser**, the combat action is executed immediately and then the next combat action is queued.  
  The incurred recovery delay happens inbetween combat actions, depending on the executed combat action.  
  In that regard, the recovery delay is interpreted as a cooldown period after taking action.

What makes Growlanser remarkable is the time-flexibility of combat decisions as the player is always able to open the action menu which pauses the combat flow in order to review the currently selected combat action and potentially cancel or change it. In Growlanser, combat situations can swiftly change as characters move around and events are triggered. The charm of Growlanser's combat system is the introduction of combat adaptability as selected combat actions are not necessarily committed to.  
Understanding this makes it much easier to follow the concept of system-assisted movement and decoupling of combat actions and active positioning (which is common in turnbased RPGs).

---

## Presenting the combat system idea
The implementation of the combat system can be done either in 2d and 3d although it works better than attack animations are distinct and recognizable by the player.  
With that in mind, the combat system idea is presented with the assumption that it will be implemented into a 3d game with actual character models with rigged character animations.  
For this combat system idea to work for 2d games, extensive work is required for distinct sprite animations which scale up significantly with the amount of different equipment.  

### Equipment Loadout Design
A character's loadout consists of the following:
- Equipment on the Left Hand
- Equipment on the Right Hand
- 4x usable items

The combination of the chosen equipments on both hands decide the weapon's combat actions but also the **class of the character**.  
With such a system in place, a character equipped with a sword and a shield is considered a soldier while a character equipped with two daggers is considered an assassin.  
Character classes don't have an effect on possible combat actions but they do have an effect on attribute bonuses and potential passive skills to help guide the class into specific combat behavior.  
  
The more important gameplay aspect are the equipment types themselves.  
**Equipment of each type have an active and a reactive combat action that is shared across all equipments of the same type.**
- Daggers can stab or be thrown
- Swords can swing wide or slash down
- Rapiers can thrust or deflect incoming attacks
- Shields can defend the user or shove the enemy
- Magic Wands can sling spells or channel spells onto the user
- Pistols can shoot bullets or reload

As combat actions are the same for each equipment type, the player can mix and match as they like and become familiar with its move set.  
Equipment of the same type can still differ between each other as in the equipment stats, passive bonuses and skills but also on other factors such as contributing to the character's movement speed or the speed of the attack animations.

Changing the equipment loadout should only be possible outside of combat or at the very least the action of changing the equipment should incur a large waiting cost.

### Item philosophy
Similar to games such as **Final Fantasy: Mystic Quest** and **Helen's Mysterious Castle**, each equipment can only be obtained once and then they will stay in the player's inventory permanently. The equipments cannot be lost or broken and it is possible to upgrade the equipment in order for them to stay relevant in their usage. The upgrade is done either by external systems (such as an upgrade system via use of upgrade points) or simply with experience gained when using the equipment themselves.  

As to whether usable items are regarded as permanent (**Helen's Mysterious Castle**) or expendable (standard) is not relevant for the combat system.

### Suggested Controls
[![Button Map for a PlayStation 5 Controller](https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/2000/cont_ps5.png)](https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/2000/cont_ps5.png)
Source: [koeitecmoamerica.com](https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/2200.html) 

| Buttons | Action |
| :---------: |:---- |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_l1.png" alt="L1 Key" width="32"/> | Active Action - Left Hand |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_l2.png" alt="L2 Key" width="32"/> | Reactive Action - Left Hand |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_r1.png" alt="R1 Key" width="32"/> | Active Action - Right Hand |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_r2.png" alt="R2 Key" width="32"/> | Reactive Action - Right Hand |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_04.png" alt="▲ Key" width="32"/> | Open / Close Combat Menu |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_03.png" alt="◼ Key" width="32"/> <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_02.png" alt="◯ Key" width="32"/> | Cycle through usable items |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_01.png" alt="X Key" width="32"/> | Use currently selected item |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_l0.png" alt="L Stick" width="32"/> | Pistol Aiming |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_r0.png" alt="R Stick" width="32"/> | Camera Controls |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_db.png" alt="Directional Pad" width="32"/> | Toggling User Interface panels |
| <img src="https://www.koeitecmoamerica.com/manual/71cYx2DZ/en/images/btn/ps5/btn_ps5_11.png" alt="Pause Button" width="32"/> | Pause / Unpause Game |

The button context is dependent on the equipment.  
For example, to use the active action of a pistol the player needs to hold the active action button (either L1 or R1) and then aim with the Left Joystick. The pistol is shot upon release of the active action button.  
Another example is the shield. When the active action button is held, the player will protect themselves with the shield for a period of time. After successfully receiving a melee attack during that period, the player can then press the reactive action button (either L2 or R2) while the active action button is still held in order to shove the opponent.  

Different equipment types make use of the active and reaction actions contextually different, of which the players are taught as the game goes on. This is similar to games such as Monster Hunter  which introduces many weapons that makes use of the common button mapping in a different and individual manner. For this combat design idea, the player only needs to know the context of two buttons for each weapon as they're tied to either the left or right hand.

### Pre-combat Situation
In a 3d environment, the player is free to move around. Entering combat differs between non-combating NPCs or hostile enemies.  
For hostile enemies, merely being in range of the enemy will trigger combat while for non-combatant NPCs it is necessary to draw the equipment in their presence.  
This behavior is akin to open-world games where drawing a weapon in a public space can incur penalties.

Either way, entering combat is comparable to **For Honor** and **Growlanser** as a combat situation is created upon the current map in which the enemies are highlighted and targetting is assisted by the system.  
Contrary to old-school JRPGs, combat does not take place in an instanced environment. In this context, the player can trigger combat in environmentally beneficial locations which also makes it possible to prepare battlefields beforehand.

### In-Combat Loop
The combat starts with an opened Combat Menu as the player is asked to decide on their target. If the target is in range of either equipment, the icons for the active actions of the respective equipment lights up.
At that point, the player is able to execute the active action of the equipment which in most cases will trigger an attack. If the chosen target is not in range of either weapon, the player character will move towards that target via system-assisted pathfinding. Alternatively, the player can select the Move option within the Combat Menu in order to choose specific points on the map to move towards. Moving this way is beneficial in order to avoid ground anomalities or traps.  
This is similar to Growlanser's way of administering combat actions.

The movement speed of the character in-combat is dependent on multiple factors.
- If the player is wearing heavy armor or specific equipment, the player's movement speed is **slightly** reduced.
- If the player is moving while in range of another enemy, the player is marked as *flanked* which reduces movement speed **moderately**.
- If the player is standing on movement-impairing ground (such as slime, mud or deep water), the player's movement speed is **severely** reduced.

The reactive actions of each equipment can be triggered at any time although their usefulness is based on context.  
For example, a pistol can shoot bullets but when out of ammo, it is necessary to reload the pistol using the reactive action.  
Another example is the Rapier which can deflect incoming physical weapon attacks via its reactive action when executed shortly before receiving the attack. Although this won't work against any magic attacks or non-weapon attacks such as shoving, kicking and biting, deflecting an attack can nullify the attack damage with the chance of disarming the enemy in the process.

Regardless of either active or reactive action executed, the player will be unable to use the equipment for a brief period of time although this as well is dependent on the equipment type.  
If the shield successfully defends against an attack, the player is then able to shove the enemy via reactive action. During that timing, the player is capable of using the reactive action in succession. However, if the timing is missed then the so-called action cooldown is applied in which the player is unable to use the shield for a brief period of time. In this system, the player is unable to defend against attacks from multiple enemies in a short period of time with a shield alone. 
The action cooldown is designed to make it unable for the player to repeatedly attack as if playing an action combat game. Each attack is carefully placed and timed and can be reacted by the enemy akin to **For Honor**. A dueling system keeps combat significant while introducing ways to make the experience dynamic and engaging.

Many intricacies of the combat system allows edge cases where the player is left without any defenses to be avoided or circumvented.  
For example, the player is capable of using each equipment's reactive action against individual enemy attacks such as deflecting an incoming arrow while shoving another enemy. Or making use of invincibility frames that is gained while shoving an enemy to evade other enemy attacks. Or preemptively throwing a dagger at a rushing enemy in order to delay their arrival while the player deals with the present enemy first.

The combat dynamic shines because the player is not tasked to care about positioning and movement but more about managing the combat situation while juggling equipment actions as the player sees fit. Similarly to how **For Honor** makes use of group combat, the player in this combat system idea is focusing on one enemy at the time while occassionally reacting to surrounding circumstances.

### Enemy Behavior

Each enemy has specific combat actions that is tied to their class and equipped weapon.  
At a glance it is possible to infer the repertoire of an enemy's combat actions based on the enemies equipment which helps to keep information as straightforward and as transparent for the player as possible.  
Enemies that regard the player as a foe will move into combat range of the player but upon arriving at that range, they will begin to cycle around the player although this depends on the enemy class.  
Ranged enemies such as spell casters and bow-wielding marksmen will keep their distance while cycling out of view of the player.  
Melee enemies with a shield will stay infront of the player while enemies without a shield will try to attack the player's sides and back.

[![Example of the camera view](https://i.ytimg.com/vi/r6pNVG2nC_g/maxresdefault.jpg)](https://i.ytimg.com/vi/r6pNVG2nC_g/maxresdefault.jpg)
Source: [youtube.com](https://www.youtube.com/watch?v=r6pNVG2nC_g) 

By default, the player's camera is slightly zoomed in on the player in order to immediately address combat actions of immediate enemies. It is advisable to rotate the camera in order to see potential foes positioned behind the player character. A decent setting would be to adjust the camera FOV once the player is more accustomed to recognizing attacks and become more familiar with their equipment of choice.

### Effectiveness of the combat system
Combat in this manner feels personal and each enemy grunt is given the respect they deserve. Group combat is not only a matter of fighting against several health pools at once and opting to use large-scale multi-target attacks but it's also about managing one's own resources to not only endure the multitudes of attacks but also about experiencing an enemy party's class composition and unintended teamwork. In **Growlanser**, specific combat rules are established in order to effectively deal with enemy groups which is not actually taught by the game but by the player's conceived intuition after experiencing the game's systems. As mages are dangerous because their spells can hit any target regardless of the amount of walls inbetween caster and target, they are often the first target to eliminate. If the player is positioned higher than the archer or hiding behind a wall, then the player character is free to disregard the archer as a noticable threat. Melee units can be freely kited around if they are wearing heavy armor. Many such ideas, tactics and implications can be used as is for this combat system idea as well due to the fact that they are logically sound and adhering to believable rules of our real world.

## End note
The way how old-school RPGs treat enemies is akin to the player seeing them as mere EXP fodder which involuntarily introduces monotony and slowly turns any combat system stale. So-called grinding games are often attributed to JRPGs whose cookie-cutter combat systems feel predictable, non-strategic and monotonous. The cat-and-mouse game that combat designers and end-consumers are engaging themselves in, is an endless struggle in the pursuit of attempting to craft a combat system that feels engaging and exciting from the day the game releases to the public to the day several years into the future when even the best thought out game system will feel dated and sluggish.  

I hope I am able to implement such a combat system idea at some point in my life in order to find out for myself if the combat system is as fun as I think it is or if it is another well thought out combat system that will inevitably become stale, predictable and monotonous once the honeymoon phase of experiencing it for the first time fades away.

## Food for Thoughts
1. What happens to two-handed equipments such as greatswords, bows and whatever else there is?
   - I haven't actually thought that far ahead but I believe then there is still only one active and reactive action on one side (Either L1/L2 or R1/R2)
   - The other side can be occupied with the same action to evade to the sides (while holding the Left Joystick to either side) or backwards (keeping the Left Joystick neutral)
2. How would the controls look like when playing on Mouse and Keyboard? (as in: PC controls)
   - Maybe the Left and Right Mousebuttons can be the active actions of the respective equipments.
   - Pressing the Mousebuttons while holding down CTRL will trigger the reactive actions.  
   - Q + E for cycling through the items, Spacebar for using the selected item, Tabulator for opening the Combat Menu, Escape for Pausing the game

## Database
### Equipment Actions
| Equipment | Active Action | Reactive Action |
| :-------: | :------------ | :-------------- |
| Unarmed | Consecutive Punches, empowers the next unarmed active action on the other equipment slot | Charging Punch, hold down the button to charge it up and let it go to perform a charging strike that pushes the player forward | 
| Sword | Sweep the sword horizontal into the direction of the Left Joystick.  <br>If the Left Joystick is left neutral, the sword sweep will be facing away from the player <br>Can deflect physical range attacks such as arrows | Vertical Slash down on the target
| Axe | Vertical Slash down on the target | Vertical Uppercut, exposes weakspots when used against a defending enemy.
| Dagger | Swift Stab, halves its action cooldown upon successful attack | While the button is held, aim with the Left Joystick. Upon button release, throw the dagger into that direction.  <br>This action will unequip the dagger. Automatically reequip the dagger after combat or upon picking it up from the ground. Can deflect physical range attacks such as arrows.
|Club|Hit the enemy into the direction of the Left Joystick.<br>If the Left Joystick is left neutral, the sword sweep will be facing away from the player <br> If the attack is unblocked, pushes the target into the direction of the attack. | Charging Strike, hold down the button to charge it up and let it go to perform a charged strike into the the direction of the Left Joystick.<br>If the attack hits the defending target, exposes the enemy. |
|Spear| Thrust the spear at the target. If the button is held, it is possible to manually aim with the use of the Left Joystick. Can deflect physical range attacks such as arrows | Spear Lunge at the target that can push the enemy back if the attack is not defended.
| Rapier | Rapier Thrust at the target | Deflection Maneuver, can deflect any physical attacks. If the physical attack is in melee range, can disarm the enemy depending on the enemy's grip value.
|Shield| Hold the Shield to defend against incoming physical or magical attacks from the front | If an attack connected with the shield's active action, using the reactive action will shove the player forward. If the shove hits any enemy, their action cooldown doubles
|Crossbow| Shoots a bolt at the target. Can be aimed with the Left Joystick if the button is held.<br>Can deflect physical range attacks such as arrows<br> If the bolt hits a structure immediately after hitting any target, bind the target to the structure | Reloads the crossbow |
|Pistol| Shoots a bullet at the target. Can be aimed with the Left Joystick if the button is held.<br>Can deflect physical range attacks such as arrows | Reloads the pistol |
| Wand | Shoots a magical bolt towards the target. Use the Left Joystick to determine the magical element | Channels magical power to increase the recovery of magic power |
| Tome | Places a static magical space around the target that inflicts an effect over time. Use the Left Joystick to determine the magical space property. | Infuses the user with a temporary effect that is determined by the equipped tome |


### Some Class Combinations
| Equipment A | Equipment B | Class | Class Bonus |
| :---------: | :---------: | :---: | :---------- |
| Sword | Sword | Sword Dancer | If an active action hits the enemy during their attack animation, deflect the enemy attack |
| Sword | Shield | Soldier | Movement speed is not reduced when wearing heavy armor, user cannot be flanked |
| Sword | Axe | Barbarian | Increases overall damage deviation, defeating a target temporarily increases damage |
| Spear | Shield | Hoplite | Upon defending a physical attack, increases the next physical attack |
| Dagger | Dagger | Assassin | Inflicted damage have percentage-based armor penetration |
| Rapier | Sword<br>Wand<br>Pistol | Counter Blade<br>Counter Mage<br>Counter Shot | Inflict increased damage for a brief time against enemies whose attacks had been deflected. |
| Rapier | Tome | Spell Fencer | Magical spaces created by the tome are no longer static and follows the user, the user no longer receives damage from their own magical space |
|Rapier|Axe|Pirate|User is immune to some ground-hazards and gains a movement speed bonus when standing on wet surfaces|
|Rapier|Dagger|Duelist||
|Spear|Axe|Gladiator|Decreases damage taken from target, increases damage against the target|
|Wand|Tome|Wizard/Sorceress|Gain information about currently channelled spells and their invoker, spells cancel the target's invoked spells on hit. |
|Tome|Tome| Archmage | Increases the effect of magical spaces the more it is casted onto the same location, magical spaces can stack.|
|Pistol|Pistol|Gunslinger|Halves action delay when pistols are shot alternately. Halves reload cooldown when both pistols are out of ammo.|
|Dagger|Crossbow|Hunter/Huntress|Increases movementspeed when the target's health is below 50%|
|Club|Shield|Paladin|Club gains a glowing effect that does increased damage against undead creatures and the shield can also block magical attacks. Successful blocking heals the user instead|
|Dagger|Wand|Blade Invoker|Daggers are infused with a magical element, the wand's reactive action is replaced with the ability to teleport the thrown dagger back to the user|
|Club|Tome|Necromancer|Magical spaces summons familiars and undead creatures (if placed onto locations of recently departed characters)|

written on 17th September 2024