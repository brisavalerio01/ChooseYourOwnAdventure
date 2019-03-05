// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You have woken up in an empety room, in front of you are two doors",
            choices: [
                {
                    text: "right door",
                    nextLevel: "red liquid",
                },

                {
                    text: "left door",
                    nextLevel: "unbroken door",
                },
            ]
        },

        redliquid: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "It was just red paint and there's a key!",
            choices: [
                {
                    text: "go to the other room",
                    nextLevel: "start",
                },
            ]
        },

        unbrokendoor: {
            message: "it's locked...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
