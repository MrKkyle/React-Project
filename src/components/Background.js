import Form from './Form';
function Button()
{
    const click = () =>
    {
        window.location.href = "feedback.html";
    };

    return (
        <button onClick = {click}>Click me!</button>
    );
}

/* Must start with a Caps letter */
function Background()
{
    return (
        <>
            <h2>Hi, I will be the Background + form</h2>
            <Form />
            <Button />
        </>
    );
}

export default Background;