import React from 'react'

export const AddTodo = () => {
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="email" class="form-control" id="title" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Todo Description</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
