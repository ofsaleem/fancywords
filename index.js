'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = "amzn1.echo-sdk-ams.app.random-fancy-word"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Random Fancy Word';


/**
 * Array containing words and their definitions
 */
var FACTS = [
  "affluenza: A feeling of malaise accompanied by lack of motivation, dissatisfaction, feelings of guilt, especially among wealthy young people.",
  "dox: To gather and publish someone’s personal information, such as phone number, address, email messages, credit card numbers, etc., especially with a malicious intent.",
  "straitlaced: Excessively strict, rigid, old-fashioned, or prudish.",
  "reticence: A reluctance to express one’s thoughts and feelings.",
  "herculean: Requiring extraordinary strength or effort.",
  "autolycan: Characterized by thievery or trickery.",
  "posthumous: Happening after someone’s death, but relating to something done earlier.",
  "parsimony: Excessive frugality; stinginess.",
  "clairaudience: The supposed ability to hear what is inaudible.",
  "snowclone: A cliché adapted to a new use.",
  "happenchance: A chance occurrence.",
  "ignominious: Deserving or causing disgrace or shame.",
  "officious: Excessively eager in offering unwanted or unneeded advice or help.",
  "nimrod: A stupid person.",
  "expectorate: To spit.",
  "Quixote: Someone who is unrealistic, naive, chivalrous, idealistic, etc. to an absurd degree.",
  "antonomasia: The use of an epithet or title for a proper name, for example, the Bard for Shakespeare.",
  "affectious: Affectionate or cordial.",
  "quoz: An odd person or thing.",
  "scuttlebutt: Rumor, gossip."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
      var wordIndex = Math.floor(Math.random() * FACTS.length);
      var randomWord = FACTS[wordIndex];
      var speechOutput = "Here's your fancy word: " + randomWord;
      this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomWord);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say give me a word, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Good luck becoming a cunning linguist!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Good luck becoming a cunning linguist!');
    }
};
