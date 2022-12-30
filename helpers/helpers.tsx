import { FirstLevelMenuItem } from '../interfaces/IMenu'
import { TopLevelCategory } from '../interfaces/IPage'
import CoursesIcon from './icons/Courses.svg'
import ServicesIcon from './icons/Services.svg'
import BooksIcon from './icons/Books.svg'
import ProductsIcon from './icons/Products.svg'


export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Services', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Books', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Products', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]
