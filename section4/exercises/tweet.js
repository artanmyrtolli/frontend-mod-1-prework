/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.timeStamp = '0';
    this.numberOfLikes = 0;
    this.comments = ['No Comments Yet!'];
  }
  updateAuthor (newAuthor) {
    this.author = newAuthor;

  }
  updateContent (newContent) {
    this.content = newContent;
    return this;
  }
  updateTimeStamp (newTimeStamp) {
    this.timeStamp = new Date().toISOString();
    return this;
  }
  updateNumOfLikes () {
    this.numberOfLikes++;
    return this;
  }
  updateComments (newComments) {
    if (this.comments[0] === 'No Comments Yet!') {
    this.comments[0] = newComments;

  } else {
    this.comments.push(newComments);
  }
  }
};

var tweet1 = new Tweet ('Artan' , 'Go Knicks!');
tweet1.updateNumOfLikes().updateTimeStamp();
tweet1.updateComments('Hey');
tweet1.updateComments('Nice');

console.log(tweet1);

var tweet2 = new Tweet ('Artan' , 'Also, Go YANKEES!!!');
tweet2.updateTimeStamp().updateNumOfLikes();
tweet2.updateComments('NYY4lyfe');

console.log(tweet2);
