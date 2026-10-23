function Hello() {

    let myName = 'Rosan';
    let number = 456;
    let fullName = () =>{
        return 'Rosan Sahoo';
    }

    return <p>
        Hello this is the future speaking. I am your master {myName}.
        MessageNo: {number} I am your master {fullName()}.
    </p>
}

export default Hello;