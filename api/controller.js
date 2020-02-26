const {
    compileLateX,
    downloadLateX,
    displayLateX
} = require('./service')
const path = require('path')

const generateIndex = (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
}

const getInputLateX = (req, res) => {
    compileLateX(req.body.Compile, res, (error) => {
        if (error) {
            console.error(error)
            return
        }
    })
}

const getOutputLateX = (req, res) => {
    downloadLateX(res, (error) => {
        if (error) {
            console.error(error)
            return
        }
    })
}

const getPDF = (req, res) => {
    displayLateX(res, (error) => {
        if (error) {
            console.error(error)
        }
    })
}

module.exports = {
    generateIndex,
    getInputLateX,
    getOutputLateX,
    getPDF
}