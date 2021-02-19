//input animal from the terminal
const inputAnimal = process.argv.slice(2);
//console.log(inputAnimal.toString());

//joke assignments
const catJokes = ['What do cats like to eat on a hot day? A mice-cream cone!','Why do cats always get their way? They are very purr-suasive!', 'How do two cats end a fight? They hiss and make up!'];
const dogJokes = ['How did the little Scottish dog react when he met the Loch Ness Monster? He was Terrier-fied!','Why was the dog stealing shingles? He wanted to become a woofer!','What kind of dog did Dracula have? A bloodhound.'];
const rJokes = ['What do you call a sleeping bull? A bull-dozer.','What did the farmer call the cow that had no milk? An udder failure','Where do bears vote? The north poll.'];

//deciding what the input is
const inputDecision = () =>{
    if (inputAnimal.toString().toLowerCase() === 'dog'){
        return dogJokes[Math.floor(Math.random() * dogJokes.length)]
    }else if (inputAnimal.toString().toLowerCase() === 'cat'){
        return catJokes[Math.floor(Math.random() * catJokes.length)]
    }else{
        return rJokes[Math.floor(Math.random() * rJokes.length)]
    }
             
};

console.log(inputDecision());