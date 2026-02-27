const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()

const PORT = process.env.PORT

const app = express();

app.use(cors());

app.get('/:id', (req, res) => {
    try {
        return res.status(200).json({
            'message': `hello ${req.params.id}`
        })

    } catch (error) {
        return res.status(504).json({
            'message': `Hello ${req.params.id}, we have faced some maintenance issue.\nKindly stay on the site.`
        })
    }
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}/`)
})