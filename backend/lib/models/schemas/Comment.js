const { Schema } = require("mongoose");

const CommentSchema = new Schema(
  {
    authorId: {
      ref: "User",
      required: true,
      type: String,
    },
    comment: {
      required: true,
      type: String,
    },
    likes: {
      type: [String],
    },
    likesCount: {
      type: Number,
    },
    parentId: {
      ref: "Comment",
      type: Schema.Types.ObjectId,
    },
    postId: {
      ref: "Post",
      required: true,
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  },
);

CommentSchema.add({
  childCount: {
    type: Schema.Types.Number,
  },
  children: {
    ref: "Comment",
    type: [CommentSchema],
  },
});

CommentSchema.index({
  createdAt: 1,
  parentId: 1,
  postId: 1,
});

module.exports = CommentSchema;
