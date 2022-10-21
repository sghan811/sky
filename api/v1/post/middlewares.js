const post_upload = (req, res, next) => (
    !req.user
      ? next(new Error('Authorization required'))
      : next()
)
const index_load = (req, res, next)=> (
  next()
)

module.exports={post_upload,index_load};