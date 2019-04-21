using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkOn
{
    class Animal
    {
        private string name;
        protected string sound;

        public void MakeSound()
        {
            Console.WriteLine($"{name} and says {sound}");

        }

        public Animal()
            : this("No name", "No sound") { }

        public Animal(string name)
            : this(name, "No sound") { }
        
        public Animal(string name, string sound)
        {
            Name = name;
            Sound = sound;
        }

        public string Name
        {
            get { return name; }
            set
            {
                if (!value.Any(char.IsDigit))
                {
                    name = "No name";
                }
                name = value;
            }
        }
        public string Sound
        {
            get { return sound; }
            set
            {
                if (value.Length > 10)
                {
                    sound = "No sound";
                }
                sound = value;
            }
        }
    }
    class AnimalIDInfo
    {
        public int IDNum { get; set; } = 0;
        public string Owner { get; set; } = "No Owner";

    }

}

