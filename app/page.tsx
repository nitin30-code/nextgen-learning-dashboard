import ActivityCard from "@/components/Activitycard";
import CourseCard from "@/components/Coursecard";
import Herocard from "@/components/Herocard";
import Sidebar from "@/components/Sidebar";
import { supabase } from "@/lib/supabase";


export default async function Home() {
  
   const result = await supabase
  .from("courses")
  .select("*");

const courses = result.data;
const error = result.error;

  if (error) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1>Failed to load courses</h1>
    </main>
  );
}

  return (
   <main className="min-h-screen bg-black text-white flex">
  <Sidebar />

  <section className="flex-1 p-6">
    <Herocard />
    <pre className="text-green-400">
  {/* {JSON.stringify(courses, null, 2)} */}
    </pre>
    <div className="grid grid-cols-12 gap-4 mt-4">
      {
  courses?.map((course) => (
   <div key={course.id }className="col-span-12 md:col-span-6 xl:col-span-4">
        <CourseCard title={course.title} progress={course.progress} iconName={course.icon_name} />
    </div>
  ))
}
      {/* <div className="col-span-4">
        <CourseCard title="React" progress={65} />
      </div>

      <div className="col-span-4">
        <CourseCard title="Next.js" progress={40} />
      </div>

      <div className="col-span-4">
        <CourseCard title="TypeScript" progress={80}/>
      </div> */}

      <div className="col-span-12">
        <ActivityCard />
      </div>
    </div>
  </section>
</main>
  );
}