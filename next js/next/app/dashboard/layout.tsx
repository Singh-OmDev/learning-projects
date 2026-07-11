import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {

     return (
         <section style={{ padding: "20px" }}>
             <aside style={{ backgroundColor: "lightblue", padding: "10px", marginBottom: "20px" }}>
                    <h2>Dashboard Sidebar</h2>

                    <ul>
                         <li> overview</li>
                          <li> analytics</li>
                          <li>settings</li>


                    </ul>

                </aside>
                <div style={{ padding: "10px" }}>
                    {children}
                </div>
         </section>
     )



}