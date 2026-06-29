import { useState } from "react";
import { Trash2, Edit, Plus, GripVertical, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { defaultTestimonials, type Testimonial } from "@/data/testimonials";

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [showForm, setShowForm] = useState(false);

  const blank: Testimonial = {
    id: "",
    studentName: "",
    examCleared: "",
    rankOrScore: "",
    story: "",
    imageUrl: "",
    featured: false,
    displayOrder: testimonials.length + 1,
  };

  const [form, setForm] = useState<Testimonial>(blank);

  const openNew = () => {
    setForm({ ...blank, id: Date.now().toString(), displayOrder: testimonials.length + 1 });
    setEditing(null);
    setShowForm(true);
  };

  const openEdit = (t: Testimonial) => {
    setForm({ ...t });
    setEditing(t);
    setShowForm(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      setTestimonials(testimonials.map((t) => (t.id === editing.id ? form : t)));
    } else {
      setTestimonials([...testimonials, form]);
    }
    setShowForm(false);
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter((t) => t.id !== id));
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const arr = [...testimonials];
    [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
    setTestimonials(arr.map((t, i) => ({ ...t, displayOrder: i + 1 })));
  };

  const moveDown = (index: number) => {
    if (index === testimonials.length - 1) return;
    const arr = [...testimonials];
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
    setTestimonials(arr.map((t, i) => ({ ...t, displayOrder: i + 1 })));
  };

  return (
    <Layout>
      <section className="bg-gradient-navy py-8 md:py-12 text-primary-foreground">
        <div className="container flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">Manage Testimonials</h1>
            <p className="text-sm opacity-80 mt-1">Add, edit, and reorder student success stories.</p>
          </div>
          <button onClick={openNew} className="h-10 px-4 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm flex items-center gap-2 hover:opacity-90">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          {showForm && (
            <div className="mb-8 p-6 rounded-xl bg-card border border-border">
              <h3 className="font-display font-bold mb-4">{editing ? "Edit Testimonial" : "New Testimonial"}</h3>
              <form onSubmit={handleSave} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input required placeholder="Student Name *" value={form.studentName} onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                  className="h-11 px-4 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30" />
                <input required placeholder="Exam Name *" value={form.examCleared} onChange={(e) => setForm({ ...form, examCleared: e.target.value })}
                  className="h-11 px-4 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30" />
                <input required placeholder="Rank or Score *" value={form.rankOrScore} onChange={(e) => setForm({ ...form, rankOrScore: e.target.value })}
                  className="h-11 px-4 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30" />
                <input placeholder="Image URL (optional)" value={form.imageUrl || ""} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                  className="h-11 px-4 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30" />
                <textarea required placeholder="Success Story *" value={form.story} onChange={(e) => setForm({ ...form, story: e.target.value })} rows={3}
                  className="sm:col-span-2 px-4 py-3 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 resize-none" />
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                      className="w-4 h-4 rounded border-input accent-accent" />
                    Featured
                  </label>
                </div>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setShowForm(false)} className="h-10 px-4 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors">Cancel</button>
                  <button type="submit" className="h-10 px-4 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm hover:opacity-90">Save</button>
                </div>
              </form>
            </div>
          )}

          <div className="space-y-3">
            {testimonials.sort((a, b) => a.displayOrder - b.displayOrder).map((t, i) => (
              <div key={t.id} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="flex flex-col gap-1">
                  <button onClick={() => moveUp(i)} className="p-1 rounded hover:bg-muted text-muted-foreground" disabled={i === 0}>▲</button>
                  <button onClick={() => moveDown(i)} className="p-1 rounded hover:bg-muted text-muted-foreground" disabled={i === testimonials.length - 1}>▼</button>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm text-foreground">{t.studentName}</p>
                    {t.featured && <Star className="w-3 h-3 text-accent fill-accent" />}
                  </div>
                  <p className="text-xs text-accent">{t.examCleared} • {t.rankOrScore}</p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{t.story}</p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => openEdit(t)} className="p-2 rounded-lg hover:bg-muted text-muted-foreground"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(t.id)} className="p-2 rounded-lg hover:bg-destructive/10 text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminTestimonials;
