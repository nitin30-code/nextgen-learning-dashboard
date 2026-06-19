import ActivityCard from "@/components/Activitycard";
import CourseCard from "@/components/Coursecard";
import Herocard from "@/components/Herocard";
import Sidebar from "@/components/Sidebar";
import { supabase } from "@/lib/supabase";


export default async function Home() {
  console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.slice(0, 20));
   const result = await supabase
  .from("courses")
  .select("*");

const courses = result.data;
const error = result.error;

console.log("Courses:", courses);
console.log("Error:", error);
if (error) {
  return (
    <div>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
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