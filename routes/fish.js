const router = require('express').Router();
const Fish = require('../models/Fish');

router.route('/').get((req, res) => {
    Fish.find()
        .then((_fish) => res.json(_fish))
        .catch((err) => res.status(400).json(`Error ${err}`))
});

router.route('/add').post((req, res) => {
    const fish = req.body;

    const newFish = new Fish(fish);

    newFish.save()
        .then(() => res.json(newFish))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Fish.findById(req.params.id)
        .then((fish) => res.json(fish))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Fish.findByIdAndDelete(req.params.id)
        .then(() => res.json('Fish deleted.'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').put((req, res) => {
    Fish.findById(req.params.id)
        .then((fish) => {
            fish.type = req.body.type || fish.type;
            fish.length = req.body.length || fish.length;
            fish.date = req.body.date || fish.date;
            fish.time_of_day = req.body.time_of_day || fish.time_of_day;
            fish.river = req.body.river || fish.river;
            fish.area = req.body.area || fish.area;
            fish.fly = req.body.fly || fish.fly;

            fish.save()
                .then(() => res.json(fish))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});


module.exports = router;
