const Post = require('../models/postsModel');
const postsController = {
  // 取得全部 Post 資料
  async getPostAll(req, res, next) {
    const dataBaseData = await Post.find();
    res.send({
      status: true,
      data: dataBaseData,
      message: '成功取得全部資料',
    });
  },
  // 取得特定 ID Post 資料
  async getPost(req, res, next) {
    const id = req.params.id;
    const dataBaseData = await Post.find({ _id: id });
    res.send({
      status: true,
      data: dataBaseData,
      message: '成功取得該筆資料',
    });
  },
  // 新增一筆資料
  async newPost(req, res, next) {
    const dataFormFront = res.body;
    const newData = await Post.create(dataFormFront);
    res
      .send({
        status: 'success',
        data: newData,
        message: '成功新增一筆資料',
      })
      .end();
  },
  // 刪除全部 Post 資料
  async deletePostAll(req, res, next) {
    await Post.deleteMany();
    res.send({
      status: true,
      message: '成功刪除全部資料',
    });
  },
  // 刪除特定 ID Post 資料
  async deletePost(req, res, next) {
    const id = req.params.id;
    await Post.deleteOne({ _id: id });
    res.send({
      status: true,
      message: '成功刪除該筆資料',
    });
  },
};

module.exports = postsController;
