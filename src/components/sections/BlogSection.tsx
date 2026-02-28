// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRightIcon } from "lucide-react";

// const BlogSection = () => {
//   const { t } = useTranslation();

//   const posts = [
//     {
//       title: t('blog.post1.title'),
//       date: t('blog.post1.date'),
//       summary: t('blog.post1.summary'),
//       image: "bg-primary/10",
//     },
//     {
//       title: t('blog.post2.title'),
//       date: t('blog.post2.date'),
//       summary: t('blog.post2.summary'),
//       image: "bg-primary/20",
//     },
//   ];

//   return (
//     <section id="blog" className="section bg-secondary/30">
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="max-w-3xl mx-auto text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('blog.title')}</h2>
//           <p className="text-lg text-foreground/70">{t('blog.subtitle')}</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {posts.map((post, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
//                 <div className={`aspect-video ${post.image} flex items-center justify-center`}>
//                   <div className="text-foreground/30">
//                     <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <CardContent className="pt-4">
//                   <div className="flex flex-col gap-2">
//                     <span className="text-sm text-primary/70">{post.date}</span>
//                     <h3 className="text-xl font-bold">{post.title}</h3>
//                     <p className="text-foreground/70">{post.summary}</p>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button variant="ghost" className="group">
//                     <span>{t('blog.readMore')}</span>
//                     <ArrowRightIcon className="ml-2 rtl:ml-0 rtl:mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;
