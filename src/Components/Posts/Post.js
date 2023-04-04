import React, { Fragment, useState } from 'react'
import "./Post.css"
import { AddPost, DeletePost , updatePost} from '../../Redux/postSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Post() {
  // all Hooks used in this code 
    const [Title , setTitle] = useState("") ;
    const [Description , setDescription] = useState("") ; 
    const [newTitle , setNewTitle] = useState("") ; 
    const [newDescription , setNewDescription] = useState("");
    const [edit , setEdit] = useState(false)  ; 
    const [id , setId] = useState(null) ; 
    const [checkInputs , setCheckInputs] = useState(false) ;
    
    // items store all items user will write it 
    const items = useSelector((state) => state.post.posts)
    const dispatch = useDispatch()  ;
    // addPost function 
    const addPost = () => {
      const ID_1 = document.getElementById("post-title").value
      const ID_2 = document.getElementById("post-desc").value ;
      if(ID_1 !== "" && ID_2 !== ""){
        setCheckInputs(true) ; 
        // make it with items.length + 1 because array with 0 index 
     dispatch(AddPost({ id : items.length + 1 , Title , Description : Description})) ;
     // to reset the value of title and description 
     setTitle("") ;
     setDescription("")
    }else{
      setCheckInputs(false) ; 
    }
      }

  return ( 
 <div className='container'>
    <div className='form'>
        <input type='text' 
        placeholder='Enter Post Title'
        onChange={(e) => setTitle(e.target.value)}
        value={Title} 
        id='post-title' />
        <input type='text'  id='post-desc'  placeholder='Enter Post Desc' onChange={(e) => setDescription(e.target.value)} value={Description}/>
        <input type='Submit' value="Add post"  onClick={addPost}/>
    </div>
    <div className='posts'>
       {items.length > 0 ? 
      items.map( e => 
      <div className='post' key={Math.random() * 5 }>
            <h1>{e.Title}</h1>
            <p>{e.Description}</p>
            <button className='Edit-btn' onClick={() => {
              setEdit(true) ;
              // store the id of each row 
              setId(e.id) ; 
            }}>Edit</button>
            <button className='Delete-btn' onClick={() => dispatch(DeletePost({ id : e.id}))}>Delete</button>
            {edit && id === e.id &&  (
              <Fragment>
              <input type='text' placeholder='updated title' onChange={(e) => setNewTitle(e.target.value)}/>
              <input type='text' placeholder='updated desc'  onChange={(e) => setNewDescription(e.target.value)} />
              <input type='submit' value="updated" onClick={() => {
                dispatch(updatePost({
                  id : e.id  , 
                  Title : newTitle , 
                  Description : newDescription
                }))
                setEdit(false) ;  
                // to reset the another inputs 
              }}/>
              </Fragment>
            )}
      </div>)
        : (
          <p className='No-items'>There Is No Posts   </p>
        )}
    </div>
 </div>
  )
}
