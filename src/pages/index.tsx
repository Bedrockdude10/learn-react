// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Gallery from './qcomps/gallery_props'
import PackingList from './qcomps/props_item'
import List from './components/list_plain'
import RecipeList from './qcomps/recipes'

export default function Home() {
  return (
    <RecipeList/>
  )
}
