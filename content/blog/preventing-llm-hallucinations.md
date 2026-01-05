---
title: "Preventing LLM Hallucinations with Citation Validation"
date: 2025-01-08
description: "How I built a Pydantic-based system to ensure LLM outputs are grounded in source documents"
tags: ["LLM", "Hallucination", "Pydantic", "Validation"]
---

Hallucinations are one of the biggest challenges when deploying LLMs in production. Users need to trust that the AI's responses are accurate and grounded in real data.

## The Problem

LLMs are confident liars. They'll make up statistics, invent quotes, and cite papers that don't exist — all while sounding completely authoritative.

In enterprise settings, this is unacceptable. Imagine a legal AI citing a non-existent case, or a medical assistant inventing drug interactions.

## My Solution: Citation Validation

I built a validation layer using Pydantic and Instructor that:

1. Forces the LLM to cite sources for every claim
2. Validates that citations actually exist in the provided context
3. Rejects responses with unsupported statements

```python
from pydantic import BaseModel, field_validator

class CitedClaim(BaseModel):
    statement: str
    source_quote: str
    source_index: int
    
    @field_validator('source_quote')
    def validate_citation(cls, v, values):
        # Verify quote exists in source document
        if not is_quote_in_source(v, values['source_index']):
            raise ValueError("Citation not found in source")
        return v
```

## Results

After implementing this system:

- **Hallucination rate dropped from ~15% to <2%**
- Users reported higher trust in AI responses
- Support tickets related to "wrong information" decreased significantly

## Open Source

I've released a simplified version of this system: [pydantic-citation-validator](https://github.com/mnlscn/pydantic-citation-validator)

Feel free to use it, and let me know if you have questions!
