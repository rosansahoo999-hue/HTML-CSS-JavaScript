function Todoitem1() {

    let todoName = 'Buy Milk';
    let todoDate = '4/10/2023';
    return (
        <div class="container">
            <div class="row kg-row">
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button t ype="button" className="btn btn-danger kg-button">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Todoitem1;