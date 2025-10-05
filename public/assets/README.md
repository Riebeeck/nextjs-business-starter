# Assets Directory

This directory contains miscellaneous assets like PDFs, documents, and other downloadable files.

## Usage

Store files like:
- PDFs (resumes, whitepapers, case studies)
- Documents (DOCX, presentations)
- Archives (ZIP files)
- Other downloadable content

## Example Structure

```
assets/
├── resume.pdf
├── case-studies/
│   ├── client-project-1.pdf
│   └── client-project-2.pdf
└── downloads/
    └── starter-template.zip
```

## Usage in MDX

```mdx
Download my [resume](/assets/resume.pdf) or check out this [case study](/assets/case-studies/client-project-1.pdf).
```

## Usage in Components

```tsx
<a 
  href="/assets/resume.pdf" 
  download 
  className="text-blue-600 hover:underline"
>
  Download Resume
</a>
```
