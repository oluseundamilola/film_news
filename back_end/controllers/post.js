import {db} from "../db.js"

export const getPosts = (req,res) => {
    const q = req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?" 
    : "SELECT * FROM posts"

    db.query(q,[req.query.cat], (err,data)=>{
        if(err) return res.send(err)

        return res.status(200).json(data)
    })

}

export const getPost = (res,req) => {
    
}

export const addPost = (res,req) => {
    
}

export const deletePost = (res,req) => {
    
}

export const updatePost = (res,req) => {
    
}