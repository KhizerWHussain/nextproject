'use server'
import { Post } from '@/models/postmodel'
import { connectToDb } from './utils'
import { revalidatePath } from 'next/cache'
import { signIn, signOut } from './auth'

export const addPost = async (formData) => {
  const { title, description, slug, userId } = Object.fromEntries(formData)

  try {
    connectToDb()
    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    })

    await newPost.save()
    revalidatePath('/blog')
    return {
      message: 'post created successfully',
      status: 200,
      post: newPost,
    }
  } catch (error) {
    console.log('error => ', error)
    return { error }
  }
}

export const deletePost = async (formData) => {
  connectToDb()
  const { postId } = Object.fromEntries(formData)
  try {
    await Post.findByIdAndDelete(postId)
    revalidatePath('/blog')
    return {
      status: 200,
      message: 'post deleted successfully!',
    }
  } catch (error) {
    console.log('error => ', error)
    return { error }
  }
}

export const handleGithubLogin = async (e) => {
  'use server'
  await signIn('github')
}

export const handleLogout = async (e) => {
  'use server'
  await signOut()
}
