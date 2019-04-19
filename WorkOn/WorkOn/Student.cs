using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkOn
{

    public class Student
    {
        public int id;
        public String name;
        public static String uni = "VTU";
        private static int count;
        private string pod;

        public Student()
        {
            Console.WriteLine("New student was registed");
            count++;
        }

        ~Student()
        {
            Console.WriteLine("Destructor");
        }
        public static int Count
        {
            get
            {
                return count;
            }
        }

        public string Pod
        {
            get
            {
                return pod;
            }
            set
            {
                pod = name +  " - " + value + " POD";
            }
        }

        public void insert(int i, String n)
        {
            id = i;
            name = n;
        }
        public void display()
        {
            System.Console.WriteLine(id + " - " + name);
        }
    }
    
    class Programmer : Student
    {
        public Programmer()
        {
            Console.WriteLine("New Prog.");
        }
    }
    
}
