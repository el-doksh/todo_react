function Edit(props) {

    function saveTask(e) {
        e.preventDefault();
        let task={};
        task['title'] = e.target.elements.title.value; // from elements property
        task['date'] = e.target.elements.date.value; // from elements property
        props.update(task)
    }
    console.log(
        'props' , props.task.title
    );
    return (
        <form className="add-form" onSubmit={saveTask}>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" name='title' className="form-control" required value={props.title} />
                    </div>
                    <div className="form-group">
                        <label>Due date</label>
                        <input type="date" name='date' className="form-control date" required value={props.date} />
                    </div>
                    <button type="submit" className="btn btn-success btn-block mt-3">Save</button>
                </div>
            </div>
        </form>
    );
}

export default Edit;