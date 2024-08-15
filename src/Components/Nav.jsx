import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="dark:bg-black bg-white py-10 px-7 md:px-44 flex justify-between items-center">
            <div className="flex items-center ">
                <div className="logo w-24 md:w-36 ">
                    <svg width="100%" height="100%" viewBox="0 0 279 67" fill="#000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M128.856 51H121.56L121.512 30.84L111.624 47.448H108.12L98.28 31.272V51H90.984V17.4H97.416L109.992 38.28L122.376 17.4H128.76L128.856 51Z" fill="#1E1E1E" />
                        <path d="M156.94 25.752H160.348V51H157.084V46.392C155.308 49.464 152.044 51.24 148.012 51.24C141.58 51.24 137.356 47.64 137.356 40.392V25.752H140.764V40.056C140.764 45.432 143.548 48.168 148.348 48.168C153.628 48.168 156.94 44.76 156.94 39V25.752ZM201.381 25.56C207.525 25.56 211.557 29.112 211.557 36.36V51H208.149V36.696C208.149 31.368 205.461 28.632 200.901 28.632C195.717 28.632 192.453 31.992 192.453 37.752V51H189.045V36.696C189.045 31.368 186.357 28.632 181.749 28.632C176.613 28.632 173.301 31.992 173.301 37.752V51H169.893V25.752H173.157V30.36C174.933 27.336 178.197 25.56 182.421 25.56C186.597 25.56 189.861 27.336 191.397 30.888C193.221 27.624 196.821 25.56 201.381 25.56ZM229.631 25.56C236.159 25.56 239.855 28.824 239.855 35.352V51H236.591V47.064C235.055 49.656 232.079 51.24 227.903 51.24C222.191 51.24 218.687 48.264 218.687 43.896C218.687 40.008 221.183 36.744 228.431 36.744H236.447V35.208C236.447 30.888 233.999 28.536 229.295 28.536C226.031 28.536 222.959 29.688 220.895 31.512L219.359 28.968C221.903 26.808 225.647 25.56 229.631 25.56ZM228.431 48.552C232.271 48.552 235.103 46.728 236.447 43.416V39.288H228.527C223.631 39.288 222.047 41.208 222.047 43.8C222.047 46.728 224.399 48.552 228.431 48.552ZM250.839 20.232C249.447 20.232 248.343 19.128 248.343 17.784C248.343 16.488 249.447 15.384 250.839 15.384C252.231 15.384 253.335 16.44 253.335 17.736C253.335 19.128 252.279 20.232 250.839 20.232ZM249.111 51V25.752H252.519V51H249.111ZM265.266 30.696C266.85 27.336 270.066 25.56 274.722 25.56V28.872C274.434 28.872 274.146 28.824 273.906 28.824C268.626 28.824 265.41 32.184 265.41 38.136V51H262.002V25.752H265.266V30.696Z" fill="#545454" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M33.5 67C52.0015 67 67 52.0015 67 33.5C67 31.2865 66.7853 29.1232 66.3756 27.0296C66.2738 27.2142 66.1722 27.399 66.0709 27.584C62.3989 34.28 58.7749 41 55.9669 48.128C55.4629 49.424 54.9589 50.72 54.6229 52.064C54.5509 52.352 54.5029 52.616 54.4789 52.904C54.4549 53.432 54.3109 53.552 53.7829 53.408C52.8229 53.144 52.0069 52.112 51.8869 50.984C51.7669 49.76 52.0069 48.584 52.3189 47.408C53.6869 42.128 55.8229 37.136 58.2229 32.264C58.9601 30.7343 59.7538 29.233 60.5499 27.7273C60.7905 27.2723 61.0313 26.8168 61.2709 26.36C61.3669 26.168 61.4629 25.976 61.4869 25.712C61.3429 25.856 61.1989 26 61.0789 26.144L61.0778 26.1452C56.7582 31.2808 52.4385 36.4164 48.1189 41.528C46.9189 42.944 45.6709 44.288 44.3269 45.56C43.4629 46.376 42.5749 47.192 41.2309 46.64C39.6949 46.04 38.5189 45.08 38.2549 43.328C37.9909 41.648 38.2789 39.992 38.7109 38.384C39.9349 33.896 41.9029 29.72 44.0389 25.616C45.5029 22.808 47.1109 20.072 49.1029 17.6C50.2549 16.184 50.9269 16.064 52.4869 17.024C52.5522 17.0697 52.6176 17.1137 52.6824 17.1573C52.8558 17.274 53.0257 17.3883 53.1829 17.528C54.0949 18.32 54.2149 18.824 53.6389 19.88C53.0591 20.9465 52.4708 22.0065 51.8829 23.0659C50.4995 25.5588 49.1181 28.0479 47.8549 30.608C46.0789 34.28 44.4229 38.024 43.1269 41.888C43.0638 42.0562 43.0191 42.2244 42.9445 42.5055C42.9339 42.5453 42.9228 42.5874 42.9109 42.632C43.9909 41.864 44.8789 41.096 45.7189 40.304C49.2134 36.9173 52.4171 33.298 55.6262 29.6726C55.9875 29.2644 56.349 28.8561 56.7109 28.448C58.5794 26.3396 60.3749 24.1713 62.1707 22.0028C62.7966 21.2469 63.4226 20.4911 64.0516 19.7377C58.8011 8.09998 47.0965 0 33.5 0C14.9985 0 0 14.9985 0 33.5C0 34.1419 0.018056 34.7797 0.053688 35.4127C2.46602 29.918 5.01924 24.4924 7.728 19.136C8.088 18.44 8.472 17.792 8.928 17.168C9.336 16.616 9.816 16.496 10.464 16.688C11.064 16.88 11.592 17.216 12.072 17.624C12.696 18.152 12.912 18.776 12.624 19.592C11.7184 22.4447 10.5138 25.1693 9.31233 27.8865C9.24019 28.0497 9.16805 28.2129 9.096 28.376C8.472 29.792 7.848 31.208 7.344 32.672C7.576 32.384 7.80534 32.0933 8.03467 31.8027C8.49334 31.2213 8.952 30.64 9.432 30.08C12.936 25.904 16.632 21.896 20.52 18.056C20.7672 17.8265 21.0273 17.623 21.2909 17.4168C21.3856 17.3426 21.4808 17.2682 21.576 17.192C22.632 16.352 23.712 16.376 24.84 17C26.712 18.008 27.24 19.16 26.832 21.224C26.5156 22.7608 25.9012 24.1912 25.2896 25.6154C25.2517 25.7036 25.2138 25.7918 25.176 25.88C24.2949 27.9066 23.3329 29.8726 22.3642 31.8521C22.2775 32.0293 22.1908 32.2066 22.104 32.384C22.0893 32.4098 22.0729 32.4361 22.0559 32.4633C21.9621 32.6137 21.851 32.7919 21.912 33.056C22.0244 32.9232 22.1324 32.7991 22.236 32.68C22.3759 32.5193 22.5079 32.3676 22.632 32.216C23.3179 31.4327 24.0012 30.6468 24.6845 29.8607C27.5397 26.5764 30.3963 23.2904 33.456 20.192C34.656 18.992 35.904 17.864 37.272 16.88C38.376 16.088 39.408 16.064 40.512 16.784C41.664 17.528 42.312 18.464 42.072 19.904C41.64 22.52 40.608 24.92 39.36 27.224C38.1201 29.5087 36.7994 31.753 35.4775 33.9992C34.5222 35.6225 33.5663 37.2468 32.64 38.888C30.288 43.04 27.96 47.192 26.04 51.56C25.4367 52.9027 24.9755 54.2928 24.5155 55.6791C24.4082 56.0025 24.301 56.3257 24.192 56.648C24 57.152 23.952 57.68 23.976 58.208C23.976 58.976 23.688 59.168 22.968 58.904C21.576 58.376 20.712 56.744 21.12 55.184C21.936 52.016 22.944 48.896 24.216 45.872C27.048 39.104 30.408 32.624 34.104 26.288C34.872 24.944 35.592 23.576 36.168 22.136C34.752 23.312 33.456 24.608 32.208 25.928C28.1643 30.3025 24.3177 34.846 20.4741 39.3859C19.299 40.7739 18.1241 42.1616 16.944 43.544C16.6971 43.849 16.5293 44.1979 16.3609 44.5482C16.2509 44.7768 16.1407 45.006 16.008 45.224C15.816 45.56 15.612 45.896 15.408 46.232C15.204 46.568 15 46.904 14.808 47.24C14.52 47.768 14.112 47.864 13.584 47.648C12.072 47 11.832 46.304 12.024 45.128C12.384 43.208 13.152 41.432 13.92 39.68C15.3862 36.32 16.9884 33.028 18.5907 29.7361C19.5062 27.855 20.4218 25.9738 21.312 24.08C21.672 23.336 21.984 22.544 22.248 21.704C22.1483 21.7954 22.0485 21.884 21.9498 21.9716C21.7634 22.1371 21.5806 22.2994 21.408 22.472C16.224 27.44 11.616 32.912 7.464 38.768C5.80169 41.0952 4.06888 43.352 2.21909 45.515C7.04885 58.0813 19.2329 67 33.5 67Z" fill="#FD6F00" />
                    </svg>
                </div>
            </div>
            <div className="flex  items-center md:gap-6">
                <ul className="flex space-x-6">
                    <li>
                        <Link legacyBehavior href="/">
                            <a className="dark:text-white text-gray-800 sm:inline-block hidden hover:text-orange-500 transition duration-300">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/about">
                            <a className="dark:text-white text-gray-800 sm:inline-block hidden hover:text-orange-500 transition duration-300">About Me</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/services">
                            <a className="dark:text-white text-gray-800 sm:inline-block hidden hover:text-orange-500 transition duration-300">Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/projects">
                            <a className="dark:text-white text-gray-800 sm:inline-block hidden hover:text-orange-500 transition duration-300">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/testimonials">
                            <a className="dark:text-white text-gray-800 sm:inline-block hidden hover:text-orange-500 transition duration-300">Testimonials</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/contact">
                            <a className="dark:text-white text-gray-800 sm:inline-block hidden hover:text-orange-500 transition duration-300">Contact</a>
                        </Link>
                    </li>
                </ul>
                <a
                    href="/cv.pdf"
                    className="bg-orange-500 visible w-max text-xs md:text-base text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
                    download
                >
                    Download CV
                </a>
            </div>

        </nav>
    );
}

export default Nav;
