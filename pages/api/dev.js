export default function handler(req, res) {
    // console.dir(req, { depth: 1 });

    if (Object.keys(req.query)[0]) {
        const fn = Object.keys(req.query)[0];
        console.log(fn);
    
        return import(`../../functions/${fn}`)
        .then(mod => mod.default(req, res))
        .catch(err => {
            console.dir(err);
        });
    } else {
        res.status(200).json(
            {
                run_with: '/api/dev?xxx'
            }
        );
    }
}
