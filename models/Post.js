const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
//   stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
//   fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);

exports.createPerson = async(req, res, next) => {

     let response = [];

     const createPerson = new Person({
        _id: new mongoose.Types.ObjectId(),
         name: 'Ian Fleming',
         age: 50
       
     });

   
      const ress = await createPerson.save()
    res.send(ress)
};

exports.createStory = async(req, res, next) => {

    let response = [];

    const createStory = new Story({
        title: 'Casino Royale',
     author: author._id // assign the _id from the person
      
    });

  
     const ress = await createStory.save()
   res.send(ress)
};

// const auth = async(() => {
//     const author = await new Person({
//         _id: new mongoose.Types.ObjectId(),
//         name: 'Ian Fleming',
//         age: 50
//       });
//    author.save();

// })

  
  
//   const story1 = await new Story({
//     title: 'Casino Royale',
//     author: author._id // assign the _id from the person
//   });
  
//  await story1.save();

   const story =  Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec();
// prints "The author is Ian Fleming"
console.log(`${story.author.name}`);