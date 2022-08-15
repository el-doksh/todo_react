function Create(props) {
    

    function saveTask(e) {
        e.preventDefault();
        let task={};
        task['title'] = e.target.elements.title.value; // from elements property
        task['date'] = e.target.elements.date.value; // from elements property
        props.submit(task)
    }

    return (
        <form className="add-form" onSubmit={saveTask}>
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <label>Task Name</label>
                    <input type="text" name='title' className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Due date</label>
                    <input type="date" name='date' className="form-control date" required />
                </div>
                <button type="submit" className="btn btn-success btn-block mt-3">Save</button>
            </div>
        </div>
        </form>
    );
}

export default Create;