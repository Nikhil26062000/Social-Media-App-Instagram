

/*
? --------------- Controllers for Signup page -------------
*/

const Home = (req,res) => {
    try {

        res.status(200).send(req.body);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {Home};