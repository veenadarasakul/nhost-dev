export default (req, res) => {

    console.log('<< req.headers >>', req.headers);
    // console.dir(req, { depth: 2 });
    // console.log('<< req.apiGateway >>', req.apiGateway);
    // console.log('<< req.requestContext >>', req.requestContext);
    // console.log('<< req.client.address() >>', req.client.address());

    res.status(200).json(
        req.headers
    );
}



